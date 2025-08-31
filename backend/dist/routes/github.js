"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubRouter = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
exports.githubRouter = express_1.default.Router();
// Cache for GitHub data
let githubCache = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
// Get GitHub stats
exports.githubRouter.get('/stats', async (req, res) => {
    try {
        const now = Date.now();
        // Return cached data if still valid
        if (githubCache && (now - cacheTimestamp) < CACHE_DURATION) {
            return res.json({ success: true, data: githubCache });
        }
        const username = process.env.GITHUB_USERNAME;
        const token = process.env.GITHUB_TOKEN;
        if (!username) {
            return res.status(400).json({
                success: false,
                message: 'GitHub username not configured'
            });
        }
        const headers = token ? { Authorization: `token ${token}` } : {};
        // Fetch user data
        const userResponse = await axios_1.default.get(`https://api.github.com/users/${username}`, { headers });
        // Fetch repositories
        const reposResponse = await axios_1.default.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, { headers });
        const repos = reposResponse.data;
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        // Get pinned repositories (featured projects)
        const pinnedRepos = repos
            .filter((repo) => !repo.fork && repo.stargazers_count > 0)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
        const githubData = {
            user: {
                login: userResponse.data.login,
                name: userResponse.data.name,
                bio: userResponse.data.bio,
                avatar_url: userResponse.data.avatar_url,
                public_repos: userResponse.data.public_repos,
                followers: userResponse.data.followers,
                following: userResponse.data.following
            },
            stats: {
                totalRepos: repos.length,
                totalStars,
                totalForks,
                totalCommits: null // Would need additional API calls to calculate
            },
            pinnedRepos: pinnedRepos.map((repo) => ({
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                updated_at: repo.updated_at
            }))
        };
        // Update cache
        githubCache = githubData;
        cacheTimestamp = now;
        res.json({ success: true, data: githubData });
    }
    catch (error) {
        console.error('GitHub API error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch GitHub data'
        });
    }
});
// Get repository details
exports.githubRouter.get('/repo/:owner/:repo', async (req, res) => {
    try {
        const { owner, repo } = req.params;
        const token = process.env.GITHUB_TOKEN;
        const headers = token ? { Authorization: `token ${token}` } : {};
        const repoResponse = await axios_1.default.get(`https://api.github.com/repos/${owner}/${repo}`, { headers });
        // Get recent commits
        const commitsResponse = await axios_1.default.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`, { headers });
        res.json({
            success: true,
            data: {
                repo: repoResponse.data,
                recentCommits: commitsResponse.data
            }
        });
    }
    catch (error) {
        console.error('GitHub repo API error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch repository data'
        });
    }
});
//# sourceMappingURL=github.js.map
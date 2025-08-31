import mongoose from 'mongoose';
export declare const Analytics: mongoose.Model<{
    event: "page_view" | "project_click" | "resume_download" | "demo_click" | "contact_submit";
    timestamp: NativeDate;
    page?: string | null | undefined;
    projectId?: string | null | undefined;
    userAgent?: string | null | undefined;
    ip?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    event: "page_view" | "project_click" | "resume_download" | "demo_click" | "contact_submit";
    timestamp: NativeDate;
    page?: string | null | undefined;
    projectId?: string | null | undefined;
    userAgent?: string | null | undefined;
    ip?: string | null | undefined;
}, {}, mongoose.DefaultSchemaOptions> & {
    event: "page_view" | "project_click" | "resume_download" | "demo_click" | "contact_submit";
    timestamp: NativeDate;
    page?: string | null | undefined;
    projectId?: string | null | undefined;
    userAgent?: string | null | undefined;
    ip?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    event: "page_view" | "project_click" | "resume_download" | "demo_click" | "contact_submit";
    timestamp: NativeDate;
    page?: string | null | undefined;
    projectId?: string | null | undefined;
    userAgent?: string | null | undefined;
    ip?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    event: "page_view" | "project_click" | "resume_download" | "demo_click" | "contact_submit";
    timestamp: NativeDate;
    page?: string | null | undefined;
    projectId?: string | null | undefined;
    userAgent?: string | null | undefined;
    ip?: string | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    event: "page_view" | "project_click" | "resume_download" | "demo_click" | "contact_submit";
    timestamp: NativeDate;
    page?: string | null | undefined;
    projectId?: string | null | undefined;
    userAgent?: string | null | undefined;
    ip?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=Analytics.d.ts.map
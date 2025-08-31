import mongoose from 'mongoose';
export declare const Contact: mongoose.Model<{
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: NativeDate;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: NativeDate;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=Contact.d.ts.map
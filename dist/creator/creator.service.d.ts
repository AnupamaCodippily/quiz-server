/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { Model, mongo } from 'mongoose';
import { Creator } from './schemas/creator.schema';
export declare class CreatorService {
    private readonly creatorModel;
    constructor(creatorModel: Model<Creator>);
    create(createCreatorDto: CreateCreatorDto): Promise<Creator>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Creator, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Creator, "findOne", {}>;
    update(id: string, updateCreatorDto: UpdateCreatorDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Creator, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<mongo.DeleteResult, import("mongoose").Document<unknown, {}, Creator> & Creator & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Creator, "deleteOne", {}>;
}

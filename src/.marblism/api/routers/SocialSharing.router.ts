/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.SocialSharingInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialSharing.createMany(input as any))),

        create: procedure.input($Schema.SocialSharingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialSharing.create(input as any))),

        deleteMany: procedure.input($Schema.SocialSharingInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialSharing.deleteMany(input as any))),

        delete: procedure.input($Schema.SocialSharingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialSharing.delete(input as any))),

        findFirst: procedure.input($Schema.SocialSharingInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).socialSharing.findFirst(input as any))),

        findMany: procedure.input($Schema.SocialSharingInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).socialSharing.findMany(input as any))),

        findUnique: procedure.input($Schema.SocialSharingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).socialSharing.findUnique(input as any))),

        updateMany: procedure.input($Schema.SocialSharingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialSharing.updateMany(input as any))),

        update: procedure.input($Schema.SocialSharingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).socialSharing.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SocialSharingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialSharingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialSharingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialSharingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SocialSharingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialSharingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialSharingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialSharingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialSharingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialSharingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialSharingGetPayload<T>, Context>) => Promise<Prisma.SocialSharingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SocialSharingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialSharingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialSharingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialSharingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SocialSharingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialSharingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialSharingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialSharingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialSharingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialSharingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialSharingGetPayload<T>, Context>) => Promise<Prisma.SocialSharingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SocialSharingFindFirstArgs, TData = Prisma.SocialSharingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SocialSharingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SocialSharingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialSharingFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialSharingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SocialSharingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SocialSharingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SocialSharingFindManyArgs, TData = Array<Prisma.SocialSharingGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SocialSharingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SocialSharingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialSharingFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialSharingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SocialSharingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SocialSharingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SocialSharingFindUniqueArgs, TData = Prisma.SocialSharingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SocialSharingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SocialSharingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SocialSharingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SocialSharingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SocialSharingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SocialSharingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SocialSharingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialSharingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialSharingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialSharingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SocialSharingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SocialSharingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SocialSharingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SocialSharingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SocialSharingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SocialSharingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SocialSharingGetPayload<T>, Context>) => Promise<Prisma.SocialSharingGetPayload<T>>
            };

    };
}

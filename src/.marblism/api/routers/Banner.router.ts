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

        createMany: procedure.input($Schema.BannerInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).banner.createMany(input as any))),

        create: procedure.input($Schema.BannerInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).banner.create(input as any))),

        deleteMany: procedure.input($Schema.BannerInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).banner.deleteMany(input as any))),

        delete: procedure.input($Schema.BannerInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).banner.delete(input as any))),

        findFirst: procedure.input($Schema.BannerInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).banner.findFirst(input as any))),

        findMany: procedure.input($Schema.BannerInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).banner.findMany(input as any))),

        findUnique: procedure.input($Schema.BannerInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).banner.findUnique(input as any))),

        updateMany: procedure.input($Schema.BannerInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).banner.updateMany(input as any))),

        update: procedure.input($Schema.BannerInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).banner.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BannerCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BannerCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BannerCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BannerCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BannerCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BannerCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BannerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BannerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BannerCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BannerCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BannerGetPayload<T>, Context>) => Promise<Prisma.BannerGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BannerDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BannerDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BannerDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BannerDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BannerDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BannerDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BannerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BannerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BannerDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BannerDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BannerGetPayload<T>, Context>) => Promise<Prisma.BannerGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BannerFindFirstArgs, TData = Prisma.BannerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BannerFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BannerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BannerFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BannerFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BannerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BannerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BannerFindManyArgs, TData = Array<Prisma.BannerGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.BannerFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BannerGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BannerFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BannerFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BannerGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BannerGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BannerFindUniqueArgs, TData = Prisma.BannerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BannerFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BannerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BannerFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BannerFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BannerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BannerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BannerUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BannerUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BannerUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BannerUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BannerUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BannerUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BannerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BannerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BannerUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BannerUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BannerGetPayload<T>, Context>) => Promise<Prisma.BannerGetPayload<T>>
            };

    };
}

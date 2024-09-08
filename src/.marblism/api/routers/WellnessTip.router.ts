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

        createMany: procedure.input($Schema.WellnessTipInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).wellnessTip.createMany(input as any))),

        create: procedure.input($Schema.WellnessTipInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).wellnessTip.create(input as any))),

        deleteMany: procedure.input($Schema.WellnessTipInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).wellnessTip.deleteMany(input as any))),

        delete: procedure.input($Schema.WellnessTipInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).wellnessTip.delete(input as any))),

        findFirst: procedure.input($Schema.WellnessTipInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).wellnessTip.findFirst(input as any))),

        findMany: procedure.input($Schema.WellnessTipInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).wellnessTip.findMany(input as any))),

        findUnique: procedure.input($Schema.WellnessTipInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).wellnessTip.findUnique(input as any))),

        updateMany: procedure.input($Schema.WellnessTipInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).wellnessTip.updateMany(input as any))),

        update: procedure.input($Schema.WellnessTipInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).wellnessTip.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WellnessTipCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WellnessTipCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WellnessTipCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WellnessTipCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WellnessTipCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WellnessTipCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WellnessTipGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WellnessTipGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WellnessTipCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WellnessTipCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WellnessTipGetPayload<T>, Context>) => Promise<Prisma.WellnessTipGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WellnessTipDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WellnessTipDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WellnessTipDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WellnessTipDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WellnessTipDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WellnessTipDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WellnessTipGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WellnessTipGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WellnessTipDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WellnessTipDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WellnessTipGetPayload<T>, Context>) => Promise<Prisma.WellnessTipGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WellnessTipFindFirstArgs, TData = Prisma.WellnessTipGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WellnessTipFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WellnessTipGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WellnessTipFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WellnessTipFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WellnessTipGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WellnessTipGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WellnessTipFindManyArgs, TData = Array<Prisma.WellnessTipGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.WellnessTipFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WellnessTipGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WellnessTipFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WellnessTipFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WellnessTipGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WellnessTipGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WellnessTipFindUniqueArgs, TData = Prisma.WellnessTipGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WellnessTipFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WellnessTipGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WellnessTipFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WellnessTipFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WellnessTipGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WellnessTipGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WellnessTipUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WellnessTipUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WellnessTipUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WellnessTipUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WellnessTipUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WellnessTipUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WellnessTipGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WellnessTipGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WellnessTipUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WellnessTipUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WellnessTipGetPayload<T>, Context>) => Promise<Prisma.WellnessTipGetPayload<T>>
            };

    };
}

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

        createMany: procedure.input($Schema.MoodGraphInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).moodGraph.createMany(input as any))),

        create: procedure.input($Schema.MoodGraphInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).moodGraph.create(input as any))),

        deleteMany: procedure.input($Schema.MoodGraphInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).moodGraph.deleteMany(input as any))),

        delete: procedure.input($Schema.MoodGraphInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).moodGraph.delete(input as any))),

        findFirst: procedure.input($Schema.MoodGraphInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).moodGraph.findFirst(input as any))),

        findMany: procedure.input($Schema.MoodGraphInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).moodGraph.findMany(input as any))),

        findUnique: procedure.input($Schema.MoodGraphInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).moodGraph.findUnique(input as any))),

        updateMany: procedure.input($Schema.MoodGraphInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).moodGraph.updateMany(input as any))),

        update: procedure.input($Schema.MoodGraphInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).moodGraph.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MoodGraphCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MoodGraphCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MoodGraphCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MoodGraphCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MoodGraphCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MoodGraphCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MoodGraphGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MoodGraphGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MoodGraphCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MoodGraphCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MoodGraphGetPayload<T>, Context>) => Promise<Prisma.MoodGraphGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MoodGraphDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MoodGraphDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MoodGraphDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MoodGraphDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MoodGraphDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MoodGraphDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MoodGraphGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MoodGraphGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MoodGraphDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MoodGraphDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MoodGraphGetPayload<T>, Context>) => Promise<Prisma.MoodGraphGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MoodGraphFindFirstArgs, TData = Prisma.MoodGraphGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MoodGraphFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MoodGraphGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MoodGraphFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MoodGraphFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MoodGraphGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MoodGraphGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MoodGraphFindManyArgs, TData = Array<Prisma.MoodGraphGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MoodGraphFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MoodGraphGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MoodGraphFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MoodGraphFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MoodGraphGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MoodGraphGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MoodGraphFindUniqueArgs, TData = Prisma.MoodGraphGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MoodGraphFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MoodGraphGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MoodGraphFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MoodGraphFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MoodGraphGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MoodGraphGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MoodGraphUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MoodGraphUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MoodGraphUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MoodGraphUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MoodGraphUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MoodGraphUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MoodGraphGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MoodGraphGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MoodGraphUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MoodGraphUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MoodGraphGetPayload<T>, Context>) => Promise<Prisma.MoodGraphGetPayload<T>>
            };

    };
}

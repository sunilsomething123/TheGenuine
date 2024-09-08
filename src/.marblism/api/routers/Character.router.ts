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

        createMany: procedure.input($Schema.CharacterInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).character.createMany(input as any))),

        create: procedure.input($Schema.CharacterInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).character.create(input as any))),

        deleteMany: procedure.input($Schema.CharacterInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).character.deleteMany(input as any))),

        delete: procedure.input($Schema.CharacterInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).character.delete(input as any))),

        findFirst: procedure.input($Schema.CharacterInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).character.findFirst(input as any))),

        findMany: procedure.input($Schema.CharacterInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).character.findMany(input as any))),

        findUnique: procedure.input($Schema.CharacterInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).character.findUnique(input as any))),

        updateMany: procedure.input($Schema.CharacterInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).character.updateMany(input as any))),

        update: procedure.input($Schema.CharacterInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).character.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CharacterCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CharacterCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CharacterCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CharacterCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CharacterCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CharacterCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CharacterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CharacterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CharacterCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CharacterCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CharacterGetPayload<T>, Context>) => Promise<Prisma.CharacterGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CharacterDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CharacterDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CharacterDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CharacterDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CharacterDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CharacterDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CharacterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CharacterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CharacterDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CharacterDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CharacterGetPayload<T>, Context>) => Promise<Prisma.CharacterGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CharacterFindFirstArgs, TData = Prisma.CharacterGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CharacterFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CharacterGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CharacterFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CharacterFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CharacterGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CharacterGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CharacterFindManyArgs, TData = Array<Prisma.CharacterGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CharacterFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CharacterGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CharacterFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CharacterFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CharacterGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CharacterGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CharacterFindUniqueArgs, TData = Prisma.CharacterGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CharacterFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CharacterGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CharacterFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CharacterFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CharacterGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CharacterGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CharacterUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CharacterUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CharacterUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CharacterUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CharacterUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CharacterUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CharacterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CharacterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CharacterUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CharacterUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CharacterGetPayload<T>, Context>) => Promise<Prisma.CharacterGetPayload<T>>
            };

    };
}

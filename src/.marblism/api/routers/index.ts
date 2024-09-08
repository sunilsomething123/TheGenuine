/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createRecommendationRouter from "./Recommendation.router";
import createMoodGraphRouter from "./MoodGraph.router";
import createBannerRouter from "./Banner.router";
import createCharacterRouter from "./Character.router";
import createWellnessTipRouter from "./WellnessTip.router";
import createSocialSharingRouter from "./SocialSharing.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as RecommendationClientType } from "./Recommendation.router";
import { ClientType as MoodGraphClientType } from "./MoodGraph.router";
import { ClientType as BannerClientType } from "./Banner.router";
import { ClientType as CharacterClientType } from "./Character.router";
import { ClientType as WellnessTipClientType } from "./WellnessTip.router";
import { ClientType as SocialSharingClientType } from "./SocialSharing.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        recommendation: createRecommendationRouter(router, procedure),
        moodGraph: createMoodGraphRouter(router, procedure),
        banner: createBannerRouter(router, procedure),
        character: createCharacterRouter(router, procedure),
        wellnessTip: createWellnessTipRouter(router, procedure),
        socialSharing: createSocialSharingRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    recommendation: RecommendationClientType<AppRouter>;
    moodGraph: MoodGraphClientType<AppRouter>;
    banner: BannerClientType<AppRouter>;
    character: CharacterClientType<AppRouter>;
    wellnessTip: WellnessTipClientType<AppRouter>;
    socialSharing: SocialSharingClientType<AppRouter>;
}

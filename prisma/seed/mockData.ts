import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('21b6cb34-816e-4b90-8652-b5341d66105a', '1Sienna_Upton@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('57295bf6-e1cf-43f1-83cc-274a0dbc0cd8', '9Furman.Spinka@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'abc123', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('64cd6873-da36-4648-aca6-d437e5c7762f', '17Tara_Mills@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'abc123', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('74544d12-da56-4e31-b867-25d6e982ed39', '25Henri_Shanahan@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'def456', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('3255fca6-1352-40b8-9b73-143018547d3a', '33Kristy_Ratke@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=35', 'jkl012', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('1d8b6792-eebf-47cd-a55e-1fdc2ba41e65', '49Wilton35@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'mno345', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('354eb92a-638e-42c4-b0f4-d47bb5402f96', '57Amira_Prosacco@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'mno345', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('d5135d72-bfde-4635-aea6-3efe6b7ec085', '65Brando_Cummerata@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=67', 'jkl012', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('e7e63841-f8f7-4184-84b2-39764c34bf2f', '73Coralie_Cole@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'mno345', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('f2cf89b8-cd1b-4718-b843-9b29346e411b', 'https://i.imgur.com/YfJQV5z.png?id=81', 'Dream Big', 'Confidence is the key to success.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('a2b7cd50-209c-4318-bf30-5ea87aebac2b', 'https://i.imgur.com/YfJQV5z.png?id=85', 'Reach for the Stars', 'Persistence is the path to victory.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('977babf2-b537-4488-b6a4-ff4735463fba', 'https://i.imgur.com/YfJQV5z.png?id=89', 'Reach for the Stars', 'Persistence is the path to victory.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('0216fa03-86e4-43f2-a128-6a33f447d553', 'https://i.imgur.com/YfJQV5z.png?id=93', 'Reach for the Stars', 'Push your limits and achieve greatness.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('a1a39ddd-9177-4185-9a68-62e8857f94db', 'https://i.imgur.com/YfJQV5z.png?id=97', 'Never Give Up', 'Confidence is the key to success.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('38721606-c90c-4ca0-8cae-0c8dc0e4a47e', 'https://i.imgur.com/YfJQV5z.png?id=101', 'Believe in Yourself', 'Your dreams are within reach.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('41788de5-ed29-4c70-aefe-e9af5f37ccf7', 'https://i.imgur.com/YfJQV5z.png?id=105', 'Believe in Yourself', 'Push your limits and achieve greatness.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('4decd49c-44b8-40f7-81b3-1e1b51eb8d3f', 'https://i.imgur.com/YfJQV5z.png?id=109', 'Believe in Yourself', 'Confidence is the key to success.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('3eee630a-bae1-479c-8559-93af0af7d1c5', 'https://i.imgur.com/YfJQV5z.png?id=113', 'Stay Positive', 'Push your limits and achieve greatness.');
INSERT INTO "Banner" ("id", "imageUrl", "title", "description") VALUES ('5a961550-4623-4e74-b16a-44bc31f0204c', 'https://i.imgur.com/YfJQV5z.png?id=117', 'Believe in Yourself', 'Push your limits and achieve greatness.');

INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('ba212aaa-b1a3-4926-a8fc-a129c156563a', 'Mia the Motivator', 'Leo inspires others with his natural leadership and charisma.', 'https://i.imgur.com/YfJQV5z.png?id=123');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('71dcdd13-29da-459a-877f-cb513b11a756', 'Leo the Leader', 'Ethan encourages others to overcome obstacles and stay positive.', 'https://i.imgur.com/YfJQV5z.png?id=127');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('8c57098f-5e4f-4590-99d2-bc292d1daab7', 'Ethan the Encourager', 'Sophia is always there to support and uplift those around her.', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('66fd8519-5a27-4377-8e17-0fa5bd2489bd', 'Mia the Motivator', 'Ethan encourages others to overcome obstacles and stay positive.', 'https://i.imgur.com/YfJQV5z.png?id=135');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('aaa1c983-0da7-45d8-a032-abdaa98673db', 'Ava the Achiever', 'Ethan encourages others to overcome obstacles and stay positive.', 'https://i.imgur.com/YfJQV5z.png?id=139');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('07423399-3406-4fd9-b13a-45e0facfda22', 'Mia the Motivator', 'Ethan encourages others to overcome obstacles and stay positive.', 'https://i.imgur.com/YfJQV5z.png?id=143');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('c99a9aab-04c1-4af2-a851-596a061a9251', 'Ethan the Encourager', 'Sophia is always there to support and uplift those around her.', 'https://i.imgur.com/YfJQV5z.png?id=147');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('559d0306-685b-42ef-ae0c-f5797f5e3f8d', 'Ava the Achiever', 'Sophia is always there to support and uplift those around her.', 'https://i.imgur.com/YfJQV5z.png?id=151');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('309f9126-c6c3-452c-bd72-5c3ca975f76b', 'Mia the Motivator', 'Ava is known for her relentless drive and determination to achieve her goals.', 'https://i.imgur.com/YfJQV5z.png?id=155');
INSERT INTO "Character" ("id", "name", "description", "videoUrl") VALUES ('ebccaf99-a4f1-40a5-8a82-61caa2feb648', 'Ethan the Encourager', 'Leo inspires others with his natural leadership and charisma.', 'https://i.imgur.com/YfJQV5z.png?id=159');

INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('03cab963-27ee-4795-8715-9d844ed56f41', 'Start your day with a positive affirmation.', 'Physical Health');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('ab9908f4-9c3b-4616-95c3-393978a64b6d', 'Practice deep breathing exercises for relaxation.', 'Goal Setting');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('e032e81c-bf6e-4e85-85ab-e20cbe471dbd', 'Stay hydrated by drinking at least 8 glasses of water.', 'Goal Setting');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('906e073b-05c9-4e8d-9695-ca00e023bee7', 'Take a 10minute walk to clear your mind.', 'Goal Setting');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('06c51f7e-3bda-4b8c-b809-a7b8ca3f1573', 'Set small achievable goals for the day.', 'Goal Setting');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('05949866-338d-4d15-bd55-782b8de6dfbc', 'Set small achievable goals for the day.', 'Daily Routine');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('f2d7bd9b-447e-464d-8b40-56809624da04', 'Start your day with a positive affirmation.', 'Mental Health');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('516c4a14-aa6f-4307-a3d5-beb85366409e', 'Stay hydrated by drinking at least 8 glasses of water.', 'Physical Health');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('2af50652-25f1-4484-93f1-ff55e6feef5f', 'Start your day with a positive affirmation.', 'Stress Management');
INSERT INTO "WellnessTip" ("id", "tip", "category") VALUES ('3c7016ec-9899-4e6e-96ce-769573c23382', 'Take a 10minute walk to clear your mind.', 'Goal Setting');

INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('4550c317-3cf9-4204-b3e5-48f1dca95573', 'Pinterest', 'https://i.imgur.com/YfJQV5z.png?id=192');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('073b04fa-1e4d-4951-ba49-b80518b08f58', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=195');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('2aa1e0fc-a629-436c-8c35-05a8f2639688', 'Pinterest', 'https://i.imgur.com/YfJQV5z.png?id=198');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('3ce1227a-4d2d-42e3-840d-2c3b84009f16', 'Instagram', 'https://i.imgur.com/YfJQV5z.png?id=201');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('73b60bad-79b5-445d-8b75-b0c5e8952fcf', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=204');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('56079765-f270-4e8e-9fbd-9ddaeee7c722', 'LinkedIn', 'https://i.imgur.com/YfJQV5z.png?id=207');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('cd12f652-b451-4f84-9596-0c28dbf868bf', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=210');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('5c730e05-e7f6-4c30-b5cf-cf5e07c046eb', 'Twitter', 'https://i.imgur.com/YfJQV5z.png?id=213');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('73cbb485-f913-4ea1-b371-fb785a94d684', 'Pinterest', 'https://i.imgur.com/YfJQV5z.png?id=216');
INSERT INTO "SocialSharing" ("id", "platform", "url") VALUES ('da9c5012-b800-4044-971d-c0f21e297e37', 'LinkedIn', 'https://i.imgur.com/YfJQV5z.png?id=219');

INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('768b1553-94fd-4aa5-8c9a-c312c30de88d', 'Believe in Yourself', 'Maintain a positive outlook and spread positivity around you.', 'https://i.imgur.com/YfJQV5z.png?id=223', 'e7e63841-f8f7-4184-84b2-39764c34bf2f');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('2f710b22-0e9f-45f8-b05b-4a6221116c23', 'Embrace the Journey', 'Maintain a positive outlook and spread positivity around you.', 'https://i.imgur.com/YfJQV5z.png?id=227', '74544d12-da56-4e31-b867-25d6e982ed39');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('c173d5ec-7653-4537-9e72-b659ee958fa3', 'Rise and Shine', 'Wake up early and seize the day with enthusiasm.', 'https://i.imgur.com/YfJQV5z.png?id=231', '57295bf6-e1cf-43f1-83cc-274a0dbc0cd8');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('596e55a4-92f6-423a-a5da-888ff6fe5b96', 'Stay Positive', 'Wake up early and seize the day with enthusiasm.', 'https://i.imgur.com/YfJQV5z.png?id=235', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('5ee48c47-e3dd-4a89-b6d4-5069a18a9a66', 'Believe in Yourself', 'Wake up early and seize the day with enthusiasm.', 'https://i.imgur.com/YfJQV5z.png?id=239', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('704aa0c3-6e26-40c1-8e76-80577398e961', 'Stay Positive', 'Wake up early and seize the day with enthusiasm.', 'https://i.imgur.com/YfJQV5z.png?id=243', '21b6cb34-816e-4b90-8652-b5341d66105a');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('0d2f55b7-88fb-4d4b-b02b-a849276bb595', 'Rise and Shine', 'Pursue your passions and never give up on your dreams.', 'https://i.imgur.com/YfJQV5z.png?id=247', '21b6cb34-816e-4b90-8652-b5341d66105a');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('2d5a3956-bb54-4570-b5a5-4801ec94989f', 'Embrace the Journey', 'Pursue your passions and never give up on your dreams.', 'https://i.imgur.com/YfJQV5z.png?id=251', '57295bf6-e1cf-43f1-83cc-274a0dbc0cd8');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('07602c3a-9c69-4550-b005-c9e935a4429a', 'Chase Your Dreams', 'Maintain a positive outlook and spread positivity around you.', 'https://i.imgur.com/YfJQV5z.png?id=255', '3255fca6-1352-40b8-9b73-143018547d3a');
INSERT INTO "Recommendation" ("id", "title", "description", "imageUrl", "userId") VALUES ('c6c84545-0cb4-498e-b464-67664ae69587', 'Believe in Yourself', 'Pursue your passions and never give up on your dreams.', 'https://i.imgur.com/YfJQV5z.png?id=259', '74544d12-da56-4e31-b867-25d6e982ed39');

INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('d04ffe7c-9e44-40ef-8557-1bd8a0ee8b9c', 450, '2024-11-08T13:14:37.974Z', '57295bf6-e1cf-43f1-83cc-274a0dbc0cd8');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('34033de8-acbf-4d69-b439-dbde2ff0f784', 703, '2024-02-23T03:10:21.086Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('d5c55fba-c0a6-4af4-8553-751a28f58df4', 122, '2023-11-29T15:05:33.422Z', 'd5135d72-bfde-4635-aea6-3efe6b7ec085');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('7a4fa62b-e388-4294-8b91-342aefaa4efb', 121, '2024-07-18T16:55:17.209Z', 'e7e63841-f8f7-4184-84b2-39764c34bf2f');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('f2f96411-554e-40e1-bb04-28ac0973d3f5', 348, '2024-01-06T05:33:40.053Z', 'd5135d72-bfde-4635-aea6-3efe6b7ec085');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('d4fd9a88-b5f2-4b09-836e-a339b7cae3a7', 644, '2025-08-17T12:28:56.870Z', 'e7e63841-f8f7-4184-84b2-39764c34bf2f');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('59e152f3-2136-4aac-83c7-d63a4008e5c2', 660, '2023-11-28T08:03:19.401Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('a42a3c21-2d39-482b-8902-dd9790abfed7', 51, '2024-12-10T21:38:35.965Z', '74544d12-da56-4e31-b867-25d6e982ed39');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('aa123506-0299-4b51-a793-2c492eb0deb1', 205, '2024-08-04T17:09:18.998Z', '1d8b6792-eebf-47cd-a55e-1fdc2ba41e65');
INSERT INTO "MoodGraph" ("id", "moodLevel", "date", "userId") VALUES ('f736bc09-a10c-4a0f-aca1-0b768994852e', 349, '2025-08-14T18:32:58.916Z', '64cd6873-da36-4648-aca6-d437e5c7762f');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })

// // @ts-ignore
// /* eslint-disable */

// declare namespace API {
//   type CurrentUser = {
//     id?: number;
//     username?: string;
//     password?: string;
//     nickname?: string;
//     avatar_url?: string;
//     gender?: number;
//     phone?: string;
//     email?: string;
//     status?: number;
//     role?: number;
//     created_time?: Date;
//     updated_time?: Date;
//   };

//   type LoginResult = {
//     status?: number;
//     type?: string;
//     currentAuthority?: string;
//   };

//   type RegisterResult = {
//     status?: number;
//     type?: string;
//     currentAuthority?: string;
//   };

//   type PageParams = {
//     current?: number;
//     pageSize?: number;
//   };

//   type RuleListItem = {
//     key?: number;
//     disabled?: boolean;
//     href?: string;
//     avatar?: string;
//     name?: string;
//     owner?: string;
//     desc?: string;
//     callNo?: number;
//     status?: number;
//     updatedAt?: string;
//     createdAt?: string;
//     progress?: number;
//   };

//   type RuleList = {
//     data?: RuleListItem[];
//     /** 列表的内容总数 */
//     total?: number;
//     success?: boolean;
//   };

//   type FakeCaptcha = {
//     code?: number;
//     status?: string;
//   };

//   type LoginParams = {
//     username?: string;
//     password?: string;
//     autoLogin?: boolean;
//     type?: string;
//   };

//   type RegisterParams = {
//     username?: string;
//     password?: string;
//     check_password?: string;
//     type?: string;
//   };

//   type ErrorResponse = {
//     /** 业务约定的错误码 */
//     errorCode: string;
//     /** 业务上的错误信息 */
//     errorMessage?: string;
//     /** 业务上的请求是否成功 */
//     success?: boolean;
//   };

//   type NoticeIconList = {
//     data?: NoticeIconItem[];
//     /** 列表的内容总数 */
//     total?: number;
//     success?: boolean;
//   };

//   type NoticeIconItemType = 'notification' | 'message' | 'event';

//   type NoticeIconItem = {
//     id?: string;
//     extra?: string;
//     key?: string;
//     read?: boolean;
//     avatar?: string;
//     title?: string;
//     status?: string;
//     datetime?: string;
//     description?: string;
//     type?: NoticeIconItemType;
//   };
// }

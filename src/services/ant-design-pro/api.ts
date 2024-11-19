// // @ts-ignore
// /* eslint-disable */
// import { request } from '@umijs/max';

// /** 获取当前的用户 GET /api/user/current */
// export async function currentUser(options?: { [key: string]: any }) {
//   return request<{
//     data: API.CurrentUser;
//   }>('/api/user/current', {
//     method: 'GET',
//     ...(options || {}),
//   });
// }

// /** 搜索所有的用户 GET /api/user/list */
// export async function listUser(options?: { [key: string]: any }) {
//   return request<{
//     data: API.CurrentUser[];
//   }>('/api/user/list', {
//     method: 'GET',
//     ...(options || {}),
//   });
//   // const response = await request<{
//   //   data: API.CurrentUser[];
//   // }>('/api/user/list', {
//   //   method: 'GET',
//   //   ...(options || {}),
//   // });

//   // // 处理数字字段
//   // const processedData = response.data.map((user) => ({
//   //   ...user,
//   //   gender: user.gender == '0' ? '男' : user.gender == '1' ? '女' : '未知',
//   //   role: user.role == '0' ? '管理员' : user.role == '1' ? '用户' : '未知',
//   //   status: user.status == '0' ? '正常' : user.status == '1' ? '封禁' : '未知',
//   // }));


//   // return {
//   //   ...response,
//   //   data: processedData,
//   // };
// }

// /** 退出登录接口 POST /api/user/logout */
// export async function outLogin(options?: { [key: string]: any }) {
//   return request<Record<string, any>>('/api/user/logout', {
//     method: 'POST',
//     ...(options || {}),
//   });
// }

// /** 登录接口 POST /api/user/login */
// export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
//   return request<API.LoginResult>('/api/user/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: body,
//     ...(options || {}),
//   });
// }

// /** 注册接口 POST /api/user/register */
// export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
//   return request<API.RegisterResult>('/api/user/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: body,
//     ...(options || {}),
//   });
// }

// /** 此处后端没有提供注释 GET /api/notices */
// export async function getNotices(options?: { [key: string]: any }) {
//   return request<API.NoticeIconList>('/api/notices', {
//     method: 'GET',
//     ...(options || {}),
//   });
// }

// /** 获取规则列表 GET /api/rule */
// export async function rule(
//   params: {
//     // query
//     /** 当前的页码 */
//     current?: number;
//     /** 页面的容量 */
//     pageSize?: number;
//   },
//   options?: { [key: string]: any },
// ) {
//   return request<API.RuleList>('/api/rule', {
//     method: 'GET',
//     params: {
//       ...params,
//     },
//     ...(options || {}),
//   });
// }

// /** 更新规则 PUT /api/rule */
// export async function updateRule(options?: { [key: string]: any }) {
//   return request<API.RuleListItem>('/api/rule', {
//     method: 'POST',
//     data:{
//       method: 'update',
//       ...(options || {}),
//     }
//   });
// }

// /** 新建规则 POST /api/rule */
// export async function addRule(options?: { [key: string]: any }) {
//   return request<API.RuleListItem>('/api/rule', {
//     method: 'POST',
//     data:{
//       method: 'post',
//       ...(options || {}),
//     }
//   });
// }

// /** 删除规则 DELETE /api/rule */
// export async function removeRule(options?: { [key: string]: any }) {
//   return request<Record<string, any>>('/api/rule', {
//     method: 'POST',
//     data:{
//       method: 'delete',
//       ...(options || {}),
//     }
//   });
// }

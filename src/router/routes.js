export default [
  { path: "/", name: "home", component: () => import("@/views/Home.vue") },
  { path: "/about", name: "about", component: () => import("@/views/About.vue") },
  { path: "/login", name: "login", component: () => import("@/views/Login.vue") },
  { path: "/u/0", name: "console", component: () => import("@/views/Console.vue"), children: [
    { path: "dashboard", name: "dashboard", component: () => import("@/views/Dashboard.vue") },
    { path: "users", name: "users", component: () => import("@/views/UserList.vue") }
  ]}
]

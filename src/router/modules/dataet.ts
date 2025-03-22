const Layout = () => import("@/layout/index.vue");

export default {
  path: "/dataset",
  name: "Dataset",
  component: Layout,
  meta: {
    title: "数据集管理",
    icon: "ep:folder"
  },
  children: [
    {
      path: "",
      name: "DatasetIndex",
      component: () => import("@/views/dataset/index.vue"),
      meta: {
        title: "数据集管理"
      }
    }
  ]
} satisfies RouteConfigsTable;

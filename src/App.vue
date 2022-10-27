<template>
  <header>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid
    nesciunt quaerat voluptates quas nobis, voluptatibus, fuga minus maxime
    omnis ut rem porro amet! Pariatur atque laborum magni nostrum qui?
  </header>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />

  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label",
      },
      data: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1",
                },
              ],
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1",
                },
              ],
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped></style>

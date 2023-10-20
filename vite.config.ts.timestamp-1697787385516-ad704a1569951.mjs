// vite.config.ts
import { defineConfig } from "file:///Y:/dev/tailwind-test/prototype-app/FlatterWebApp/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///Y:/dev/tailwind-test/prototype-app/FlatterWebApp/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import devtools from "file:///Y:/dev/tailwind-test/prototype-app/FlatterWebApp/node_modules/solid-devtools/dist/vite.js";
var vite_config_default = defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true
      // e.g. enable autoname
    }),
    solidPlugin()
  ],
  server: {
    port: 3e3,
    proxy: {
      "/api": "https://localhost:44331"
    }
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJZOlxcXFxkZXZcXFxcdGFpbHdpbmQtdGVzdFxcXFxwcm90b3R5cGUtYXBwXFxcXEZsYXR0ZXJXZWJBcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlk6XFxcXGRldlxcXFx0YWlsd2luZC10ZXN0XFxcXHByb3RvdHlwZS1hcHBcXFxcRmxhdHRlcldlYkFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vWTovZGV2L3RhaWx3aW5kLXRlc3QvcHJvdG90eXBlLWFwcC9GbGF0dGVyV2ViQXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgc29saWRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc29saWQnO1xuaW1wb3J0IGRldnRvb2xzIGZyb20gJ3NvbGlkLWRldnRvb2xzL3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgZGV2dG9vbHMoe1xuICAgICAgLyogZmVhdHVyZXMgb3B0aW9ucyAtIGFsbCBkaXNhYmxlZCBieSBkZWZhdWx0ICovXG4gICAgICBhdXRvbmFtZTogdHJ1ZSwgLy8gZS5nLiBlbmFibGUgYXV0b25hbWVcbiAgICB9KSxcbiAgICBzb2xpZFBsdWdpbigpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6ICdodHRwczovL2xvY2FsaG9zdDo0NDMzMSdcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VSxTQUFTLG9CQUFvQjtBQUN6VyxPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGNBQWM7QUFFckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBO0FBQUEsTUFFUCxVQUFVO0FBQUE7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

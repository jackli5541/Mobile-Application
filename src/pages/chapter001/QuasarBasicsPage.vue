<script setup lang="ts">
import { computed, ref } from 'vue'

const activeTab = ref('syntax')
const userName = ref('同学')
const framework = ref('Quasar')
const notificationsEnabled = ref(true)
const experience = ref(35)
const dialogOpen = ref(false)
const clickCount = ref(0)

const frameworkOptions = ['Quasar', 'Vue', 'Vite', 'TypeScript']
const greeting = computed(() => `你好，${userName.value || '同学'}！`)
const topics = ['组件化开发', '响应式状态', '跨平台界面']
</script>

<template>
  <q-page class="basics-page q-pa-md q-pa-lg-xl">
    <div class="page-content">
      <header class="q-mb-lg">
        <div class="text-overline text-primary">CHAPTER 001</div>
        <h1 class="text-h4 text-weight-bold q-my-xs">Quasar 基础语法与交互组件</h1>
        <p class="text-body1 text-grey-7 q-mb-none">
          通过可运行的示例了解 Vue 响应式语法与常用 Quasar 控件。
        </p>
      </header>

      <q-tabs
        v-model="activeTab"
        align="left"
        active-color="primary"
        indicator-color="primary"
        class="text-grey-7 section-tabs"
      >
        <q-tab name="syntax" icon="code" label="基础语法" />
        <q-tab name="components" icon="widgets" label="交互组件" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="activeTab" animated class="bg-transparent">
        <q-tab-panel name="syntax" class="q-px-none q-py-lg">
          <div class="example-grid">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">插值与双向绑定</div>
                <div class="text-caption text-grey-7 q-mb-md">使用 ref、computed 和 v-model 更新界面</div>
                <q-input v-model="userName" outlined label="输入你的称呼" clearable>
                  <template #prepend><q-icon name="person" /></template>
                </q-input>
                <div class="result-box q-mt-md">{{ greeting }}</div>
                <code>const userName = ref('同学')</code>
                <code>&lt;q-input v-model="userName" /&gt;</code>
                <code v-pre>{{ greeting }}</code>
              </q-card-section>
            </q-card>

            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">事件与条件渲染</div>
                <div class="text-caption text-grey-7 q-mb-md">使用 @click 响应事件，使用 v-if 控制内容</div>
                <div class="row items-center q-gutter-md">
                  <q-btn color="primary" icon="add" label="点击计数" @click="clickCount++" />
                  <q-badge color="secondary" :label="clickCount" />
                </div>
                <q-banner v-if="clickCount >= 3" rounded class="bg-green-1 text-green-9 q-mt-md">
                  已点击至少 3 次，v-if 条件成立。
                </q-banner>
                <code class="q-mt-md">&lt;q-btn @click="clickCount++" /&gt;</code>
                <code>&lt;q-banner v-if="clickCount &gt;= 3"&gt;</code>
              </q-card-section>
            </q-card>

            <q-card flat bordered class="full-span">
              <q-card-section>
                <div class="text-h6">列表渲染与属性绑定</div>
                <div class="text-caption text-grey-7 q-mb-sm">使用 v-for 生成内容，使用 :key 绑定属性</div>
                <q-list separator>
                  <q-item v-for="(topic, index) in topics" :key="topic">
                    <q-item-section avatar>
                      <q-avatar color="primary" text-color="white" size="32px">{{ index + 1 }}</q-avatar>
                    </q-item-section>
                    <q-item-section>{{ topic }}</q-item-section>
                  </q-item>
                </q-list>
                <code>&lt;q-item v-for="topic in topics" :key="topic"&gt;</code>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="components" class="q-px-none q-py-lg">
          <div class="example-grid">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">表单控件</div>
                <div class="text-caption text-grey-7 q-mb-md">输入、选择和开关均通过 v-model 保持同步</div>
                <div class="q-gutter-y-md">
                  <q-input v-model="userName" filled label="姓名" />
                  <q-select v-model="framework" filled label="正在学习" :options="frameworkOptions" />
                  <q-toggle v-model="notificationsEnabled" label="接收学习提醒" color="primary" />
                </div>
              </q-card-section>
            </q-card>

            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">进度与反馈</div>
                <div class="text-caption text-grey-7 q-mb-md">拖动滑块，进度条会实时更新</div>
                <div class="text-h3 text-weight-bold text-primary q-mb-sm">{{ experience }}%</div>
                <q-linear-progress rounded size="12px" :value="experience / 100" color="primary" />
                <q-slider v-model="experience" :min="0" :max="100" label color="secondary" class="q-mt-lg" />
                <q-btn
                  unelevated
                  color="primary"
                  icon="open_in_new"
                  label="打开对话框"
                  class="q-mt-md"
                  @click="dialogOpen = true"
                />
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <q-dialog v-model="dialogOpen">
      <q-card class="dialog-card">
        <q-card-section class="row items-center q-pb-sm">
          <q-avatar icon="check" color="positive" text-color="white" />
          <div class="text-h6 q-ml-md">交互成功</div>
        </q-card-section>
        <q-card-section>
          你正在学习 {{ framework }}，当前学习进度为 {{ experience }}%。
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="知道了" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped>
.basics-page {
  background: #f7f8fa;
}

.page-content {
  width: min(100%, 1040px);
  margin: 0 auto;
}

.section-tabs {
  min-height: 52px;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.q-card {
  border-radius: 8px;
}

.full-span {
  grid-column: 1 / -1;
}

.result-box {
  padding: 12px;
  border-left: 4px solid var(--q-primary);
  background: #eef5ff;
  font-weight: 600;
}

code {
  display: block;
  margin-top: 8px;
  padding: 8px 10px;
  overflow-x: auto;
  border-radius: 4px;
  background: #20242b;
  color: #e7edf5;
  font-family: Consolas, monospace;
  font-size: 13px;
  white-space: nowrap;
}

.dialog-card {
  width: min(92vw, 420px);
}

@media (max-width: 700px) {
  .example-grid {
    grid-template-columns: 1fr;
  }

  .full-span {
    grid-column: auto;
  }
}
</style>

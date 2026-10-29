<script setup lang="ts">
import { ref } from 'vue'

type Dessert = { index: number; name: string; calories: number; fat: number; operation: string }

const columns = [
  { name: 'index', label: '#', field: 'index', sortable: true, align: 'center' as const },
  { name: 'name', required: true, label: 'Dessert (100g serving)', align: 'left' as const, field: (row: Dessert) => row.name, sortable: true },
  { name: 'calories', label: 'Calories', field: 'calories', sortable: true, align: 'center' as const },
  { name: 'fat', label: 'Fat (%)', field: 'fat', sortable: true, align: 'center' as const },
  { name: 'operation', label: 'Operation', field: 'operation', sortable: true, align: 'center' as const },
]

const seed = [
  { name: 'Frozen Yogurt', calories: 159, fat: 6 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9 },
  { name: 'Eclair', calories: 262, fat: 16 },
  { name: 'Cupcake', calories: 305, fat: 3.7 },
  { name: 'Gingerbread', calories: 356, fat: 16 },
  { name: 'Jelly bean', calories: 375, fat: 0 },
  { name: 'Lollipop', calories: 392, fat: 0.2 },
  { name: 'Honeycomb', calories: 408, fat: 3.2 },
  { name: 'Donut', calories: 452, fat: 25 },
  { name: 'KitKat', calories: 518, fat: 26 },
]

const rows = ref<Dessert[]>(JSON.parse(JSON.stringify(seed)).map((row: Omit<Dessert, 'index' | 'operation'>, index: number) => ({
  ...row, index, operation: 'Delete',
})))
const pagination = ref({ rowsPerPage: 5 })

function deleteData(row: Dessert) {
  rows.value = rows.value.filter((item) => item.index !== row.index)
}
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <div class="q-pa-sm">
      <q-table
        title="Treats"
        flat
        bordered
        row-key="index"
        :rows="rows"
        :columns="columns"
        v-model:pagination="pagination"
        style="max-width: 800px"
      >
        <template #body="props">
          <q-tr :props="props">
            <q-td key="index" :props="props" class="text-center">{{ props.row.index }}</q-td>
            <q-td key="name" :props="props">
              {{ props.row.name }}
              <q-popup-edit v-model="props.row.name" buttons v-slot="scope">
                <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
              </q-popup-edit>
            </q-td>
            <q-td key="calories" :props="props" class="text-center">
              {{ props.row.calories }}
              <q-popup-edit v-model="props.row.calories" auto-save v-slot="scope">
                <q-input v-model.number="scope.value" type="number" dense autofocus @keyup.enter="scope.set" />
              </q-popup-edit>
            </q-td>
            <q-td key="fat" :props="props" class="text-center">
              {{ props.row.fat }}
              <q-popup-edit v-model="props.row.fat" auto-save v-slot="scope">
                <q-input v-model.number="scope.value" type="number" dense autofocus @keyup.enter="scope.set" />
              </q-popup-edit>
            </q-td>
            <q-td key="operation" :props="props" class="text-center">
              <q-btn dense label="Delete" color="deep-orange" @click="deleteData(props.row)" />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

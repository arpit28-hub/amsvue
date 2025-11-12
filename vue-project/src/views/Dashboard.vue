<template>
  <div class="px-4">
    <!-- <div class="text-capitalize text-h5 font-weight-bold">dashboard</div> -->
    <PerformanceSection></PerformanceSection>
    <CriticalAlerts></CriticalAlerts>
    <Charts></Charts>
    <div class="chart-box">
      <!-- <template> -->
      <v-table height="300px" hover fixed-header striped="even" class="chart-box">
        <thead>
          <tr>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">Id</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">Asset</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">Asset name</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">Task type</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">Due Date</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">priority</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">action</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">status</th>
            <th class="text-left font-weight-bold text-body-1 text-capitalize">operations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tasks" :key="item.asset_id">
            <td>{{ item.asset_id }}</td>
            <td>
              <v-list>
                <v-list-item>
                  <v-list-item-title>{{ item.asset }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.asset_name }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </td>
            <td>{{ item.asset_name }}</td>
            <td>{{ item.task_type }}</td>
            <td>{{ item.due_date }}</td>
            <td>{{ item.priority }}</td>
            <td>{{ item.action }}</td>
            <td>
              <v-chip :color="statusColors[item.status]" class="pa-3" label>{{
                item.status
              }}</v-chip>
            </td>
            <td>
              <v-btn icon size="x-small" class="me-4" @click="handleDeleteItem(item.asset_id)"
                ><v-icon size="20">mdi-delete</v-icon></v-btn
              >
              <v-btn color="green lighten-3" @click="handleUpdateItem(item)" icon size="x-small"
                ><v-icon size="20">mdi-pencil</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
      <!-- </template> -->
    </div>
  </div>
</template>
<script>
import PerformanceSection from '@/components/dashboard/PerformanceSection.vue'
import CriticalAlerts from '@/components/dashboard/CriticalAlerts.vue'
import Charts from '@/components/dashboard/Charts.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: { PerformanceSection, CriticalAlerts, Charts },
  data() {
    return {}
  },
  computed: {
    ...mapState('counterStore', ['tasks']),
    statusColors() {
      return {
        overdue: 'red lighten-3',
        upcoming: 'orange lighten-3',
        pending: 'green lighten-3',
      }
    },
  },
  methods: {
    ...mapActions('counterStore', ['deleteItem']),
    handleDeleteItem(id) {
      this.deleteItem(id)
    },
  },
}
</script>

<style lang="scss" scoped></style>

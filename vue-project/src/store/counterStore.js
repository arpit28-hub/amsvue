export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          asset_id: 1,
          asset: 'CNC Machine',
          asset_name: 'Astigracei Joint Smith',
          task_type: 'CALIBRATION',
          due_date: '2 days overdue',
          priority: 'CRITICAL',
          action: 'Schedule',
          status: 'overdue',
        },
        {
          asset_id: 2,
          asset: 'Forklift',
          asset_name: 'Astigracei Mice Johnson',
          task_type: 'MAINTENANCE',
          due_date: 'Due in 3 days',
          priority: 'SCHEDULED',
          action: 'Schedule',
          status: 'upcoming',
        },
        {
          asset_id: 3,
          asset: 'Generator',
          asset_name: 'Astigracei Sarah Wilson',
          task_type: 'INSPECTION',
          due_date: 'Due in 7 days',
          priority: 'SCHEDULED',
          action: 'Schedule',
          status: 'upcoming',
        },
        {
          asset_id: 4,
          asset: 'Air Compressor',
          asset_name: 'Astigracei John Miller',
          task_type: 'CLEANING',
          due_date: 'Due tomorrow',
          priority: 'HIGH',
          action: 'Assign',
          status: 'pending',
        },
        {
          asset_id: 5,
          asset: 'Welding Machine',
          asset_name: 'Astigracei Olivia Davis',
          task_type: 'MAINTENANCE',
          due_date: 'Due in 10 days',
          priority: 'LOW',
          action: 'Review',
          status: 'upcoming',
        },
        {
          asset_id: 6,
          asset: 'Conveyor Belt',
          asset_name: 'Astigracei Liam Thompson',
          task_type: 'REPAIR',
          due_date: '1 day overdue',
          priority: 'CRITICAL',
          action: 'Repair',
          status: 'overdue',
        },
        {
          asset_id: 7,
          asset: 'Lathe Machine',
          asset_name: 'Astigracei Emma Brown',
          task_type: 'CALIBRATION',
          due_date: 'Due in 5 days',
          priority: 'MEDIUM',
          action: 'Schedule',
          status: 'upcoming',
        },
        {
          asset_id: 8,
          asset: 'Cooling System',
          asset_name: 'Astigracei Noah Wilson',
          task_type: 'INSPECTION',
          due_date: 'Due today',
          priority: 'HIGH',
          action: 'Inspect',
          status: 'pending',
        },
      ],
      tempTask: {
        asset_id: null,
        asset: '',
        asset_name: '',
        task_type: '',
        due_date: '',
        priority: '',
        action: '',
        status: '',
      },
    }
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
  },
  actions: {
    deleteItem({ commit, state }, id) {
      const updatedTasks = state.tasks.filter((task) => task.asset_id !== id)
      commit('SET_TASKS', updatedTasks)
    },
    updateItem({ commit, state }, id) {
      const updatedTasks =  state.tasks.filter((task) => {})
    },
  },
  getters: {},
}

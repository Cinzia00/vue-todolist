const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Quartely Newsletter',
                    done: true,
                },
                {
                    text: 'Recruiting blog post',
                    done: true,
                },
                {
                    text: 'Mobile app luaunch',
                    done: true,
                },
                {
                    text: 'Interview John H.',
                    done: false,
                },
                {
                    text: 'Summit update to mobile storefronts',
                    done: true,
                },
                {
                    text: 'Schedule meeting width Alex',
                    done: false,
                },
                {
                    text: 'Homepage refresh',
                    done: true,
                },
                {
                    text: 'Onboard new Sales team members',
                    done: true,
                },
                {
                    text: 'Review editorial calendar',
                    done: true,
                }
            ],
            addNewTask: '',
        }
    },
    methods: {
        removeTask(startIndex) {
            this.tasks.splice(startIndex, 1)
        },
        addTask(){
            // const newTask = this.addNewTask
            //this.tasks.push(newTask)
            this.tasks.push({
                text: '',
                done: false,
            })
			// this.addNewTask = ''
        }
    }
}).mount('#app')



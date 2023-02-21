console.log('CIAO')

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
                },
            ],
            doneTrue: "fa-regular fa-circle-check",
            doneFalse: "fa-sharp fa-regular fa-circle-xmark"
        }
    },
    methods: {
        isOrNotDone() {
            if (this.done === true) {
                tasks.push(doneTrue)
            } else {
                tasks.push(doneFalse)
            }
        },
        removeTask(startIndex) {
            this.tasks.splice(startIndex, 1)
        }
    }

}).mount('#app')
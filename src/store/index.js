import { reactive } from 'vue'
import { fetchAppContent, fetchTopics } from '../content'

const initializeStore = async () => {
    try {
        const appContent = await fetchAppContent();
        const topics = await fetchTopics();

        // add isSelected property to each topics setting it to false
        for ( var i in topics ) {
            topics[i].isSelected = false
        }

        const state = reactive({
            steps: [
                // Will be dymanically loaded in prod
                {step: 1, title: "Einführung", status: "active", path: "/"},
                {step: 2, title: "Staatliche Förderung", status: "", path: "/state-funding"},
                {step: 3, title: "Auszahlungssumme", status: "", path: "/payout-sum"},
                {step: 4, title: "Themenauswahl", status: "", path: "/topic-selection"}
            ],
            inputs: {
                relationshipStatus: "",
                annualTaxableIncomeRange: "klsfnkl",
                employerContribution: 0,
                personalContribution: 0,
                riskFactor: ""
            },
            topics: topics,
        })

        const methods = {
            getContent(placeholder) {
                const result = appContent.find(item => item.Placeholder === placeholder)
                return result.Content || result.Placeholder
            },
            updateStepper(currentStep, value, direction) {
                console.log("Update status was triggered!")
                const steps = state.steps

                for (var i = 0; i < state.steps.length; i++) {
                    if (steps[i].step == currentStep) {
                        switch(direction) {
                            case 'forward' : 
                                // Set current step step to complete
                                steps[i].status = value
                                // Set next step to active
                                if(i + 1 !== state.steps.length + 1) {
                                    steps[i + 1].status = 'active'
                                }
                                break;
                            case 'back':
                                // Set current step step to complete
                                steps[i].status = value
                                // Set next step to ''
                                if(i + 1 !== state.steps.length + 1) {
                                    steps[i - 1].status = 'active'
                                }
                                break;
                        }
                    }
                }
            },
            toggleTopic(event) {
                console.log(event.target)
                const topicID = event.target.getAttribute("Id")
                const topic = state.topics.find(item => item.Id === topicID)

                // Uncommit the code below to make topic select component single select

                // state.topics.forEach((item, i) => {
                //     if(topicID !== item.id) {
                //         item.active = false
                //     }
                // })

                topic.isSelected = !topic.isSelected
            },
            updateInput(inputName, inputValue) {
                state.inputs[inputName] = inputValue
            }
        }

        const models = {
            linkModel: {
                href: "#",
                contentUrl: "#",
                title: "",
                text: "",
                target: "_blank",
                isLocked: false,
                isExternal: false,
                linkType: "anchor",
                tealiumTrackingModel: {
                    eventSource: "eventSource",
                    eventComponentName: "eventComponentName",
                    eventComponentHeadline: "eventComponentHeadline",
                    eventTitle: "eventTitle",
                    eventLinkType: "eventLinkType",
                    eventTarget: "eventTarget",
                    eventEngagement: "eventEngagement",
                    customAttributes: {}
                }
            }, 
            radionButtonModel: {
                isDisabled: false,
                isValid: true,
                selectedItem: {
                    id: "2",
                    name: "Institutional Investor",
                    toolTipText: "Tick this option if you are an Institutional Investor."
                },
                items: [
                    {
                        id: "1",
                        name: "Financial Professional",
                        toolTipText: "Tick this option if you are a Financial Professional."
                    },
                    {
                        id: "2",
                        name: "Institutional Investor",
                        toolTipText: "Tick this option if you are an Institutional Investor."
                    },
                    {
                        id: "3",
                        name: "Individual Investor 2",
                        toolTipText: "Tick this option if you are an Individual Investor."
                    }
                ]
            }
        }
        
        return {
            appContent,
            state,
            methods,
            models
        }
    } catch(e) {
        console.log(`Error occured in store --- ${e}`)
    }
}

export default await initializeStore()














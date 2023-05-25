<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import Sparplanrechner from '../components/Sparplanrechner.vue';
    import InfoText from '../components/InfoText.vue';
    import Stepper from '../components/stepper.vue';
    import { inject } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    import { 
        BaseButton, 
        BaseInput, 
        BaseChart, 
        BaseNotificationBox, 
        BaseRadioButtonGroup,
        BaseHeading
    } from 'dws-dx'
    


    const store = inject('store')
    const state = store.state
    const linkModel = store.models.linkModel
    const methods = store.methods

    const inputContent = {
        label: "label",
        placeholder: "Placeholder"
    }

    const riskFactor = {
        baseHeadingText: "Page Headline",
        baseHeadingType: "H4",
        default: {},
        model: {
            isDisabled: false,
            isValid: true,
            selectedItem: {
                id: "1",
                name: methods.getContent('Step3_RiskTolerance_Option1')
            },
            items: [
                {
                    id: "1",
                    name: methods.getContent('Step3_RiskTolerance_Option1')
                },
                {
                    id: "2",
                    name: methods.getContent('Step3_RiskTolerance_Option2')
                },
                {
                    id: "3",
                    name: methods.getContent('Step3_RiskTolerance_Option3')
                }
            ]
        }
    }

    const infoBoxContent = {
        notification: {
            title: "Information",
            text: methods.getContent('Step3_Income_Positive')
        },
        type: {}
    }

    const chartOptions = {
        "chart": {
            "type": "line",
            "styledMode": false,
            "style": {
            "fontFamily": "\"SlabRegular\", Helvetica, Arial, sans-serif",
            "fontSize": "12px"
            }
        },
        "title": {
            "text": "Simple DWS Chart Types"
        },
        "xAxis": {
            "categories": [
            "Jun",
            "Jul",
            "Aug",
            "Sept"
            ],
            "type": "datetime",
            "minTickInterval": 86400000,
            "dateTimeLabelFormats": {
            "millisecond": "%e. %b",
            "second": "%e. %b",
            "minute": "%e. %b",
            "hour": "%e. %b",
            "day": "%e. %b",
            "week": "%e. %b",
            "month": "%b / %y",
            "year": "%Y"
            },
            "labels": {
            "step": 2,
            "style": {
                "color": "#5A6D78",
                "fontWeight": "400",
                "fontSize": "14px",
                "fontFamily": "\"SlabLight\", Helvetica, Arial, sans-serif"
            }
            }
        },
        "yAxis": {
            "labels": {
            "step": 2,
            "style": {
                "color": "#5A6D78",
                "fontWeight": "400",
                "fontSize": "14px",
                "fontFamily": "\"SlabLight\", Helvetica, Arial, sans-serif"
            }
            },
            "title": {
            "text": "Veränderung in %"
            },
            "opposite": false
        },
        "plotOptions": {
            "series": {
            "showCheckbox": false,
            "dataGrouping": {
                "enabled": false
            }
            },
            "flags": {
            "y": -216,
            "lineColor": "#5A6D78",
            "lineWidth": 1,
            "fillColor": "#5A6D78",
            "height": 24,
            "states": {
                "hover": {
                "fillColor": "#489CD2",
                "lineColor": "#489CD2"
                }
            },
            "style": {
                "fontFamily": "SlabBold",
                "color": "#ffffff",
                "fontWeight": "400",
                "borderRadius": 12
            }
            }
        },
        "series": [
            {
            "type": "line",
            "name": "DWS Akkumula",
            "data": [
                15,
                16,
                25,
                30,
                28,
                27,
                25,
                29,
                31,
                35,
                40,
                45,
                49,
                56
            ]
            }
        ],
        "accessibility": {
            "keyboardNavigation": {
            "focusBorder": {
                "style": {
                "lineWidth": 3,
                "color": "#aa1111",
                "borderRadius": 5
                },
                "margin": 4
            }
            }
        },
        "scrollbar": {
            "enabled": false
        },
        "credits": {
            "enabled": false
        },
        "navigator": {
            "show": true,
            "adaptToUpdatedData": true,
            "maskFill": "rgba(238, 247, 247, .5)",
            "color": "white",
            "maskInside": true,
            "outlineWidth": 0,
            "borderRadius": 20,
            "lineColor": null,
            "marker": {
            "enabled": false
            },
            "handles": {
            "backgroundColor": "#007D85",
            "borderColor": "#fff",
            "color": "#fff",
            "borderRadius": 50,
            "height": 24,
            "width": 10
            },
            "height": 64,
            "margin": 32,
            "xAxis": {
            "labels": {
                "enabled": false,
                "step": 1,
                "style": {
                "color": "#5A6D78",
                "fontWeight": "400",
                "fontSize": "12px",
                "fontFamily": "\"SlabLight\", Helvetica, Arial, sans-serif"
                }
            }
            },
            "series": {
            "type": "areaspline",
            "fillColor": {
                "linearGradient": {
                "x1": 0,
                "y1": 0,
                "x2": 0,
                "y2": 1
                },
                "stops": [
                [
                    0,
                    "rgba(193,225,225, 1)"
                ],
                [
                    1,
                    "rgba(193,225,225, 0.25)"
                ]
                ]
            }
            }
        },
        "colors": [
            "#007D85",
            "#808080"
        ],
        "rangeSelector": {
            "enabled": false
        },
        "exporting": {
            "enabled": false
        }
    }

    const infoText = "Place holder text..."
    

    function callBack(event) {
        console.log(event.target._value)
        // console.log(event.target.value.name)
    }

    onBeforeRouteLeave((to)=> {
        // Input verification needed
        if (!(to.name === 'StaalicheFörderung')) {
            methods.updateStepper('3', 'complete', 'forward');
        }else {
            methods.updateStepper('3', '', 'back')
        }

        return true
    });
</script>

<template>
    <Sparplanrechner>
        <template #sparplanrechner-header>
            <div class="sparplanrechner-header header-light">{{ methods.getContent('Step3_Headline-Grey') }}
                <span class="header-dark">{{ methods.getContent('Step3_Headline-Black') }}</span>
            </div>
        </template>

        <template #stepper>
            <Stepper />
        </template>

        <template #main-content>
            <div class="main-content">
                <form>
                    <BaseNotificationBox :notification="infoBoxContent.notification"/>
                    <div class="input-container">
                        <div class="form-field-container">
                            <BaseInput 
                                class="form-input" 
                                :label="methods.getContent('Step3_OwnContribution_Label')" 
                                :mandatory="true"
                                v-model="state.inputs.relationshipStatus"
                            />
                            <InfoText :infoText="methods.getContent('Step3_OwnContribution_Info')" />
                        </div>
                        <div class="form-field-container">
                            <BaseInput 
                                class="form-input" 
                                :label="methods.getContent('Step3_RiskTolerance_Label')" 
                                v-model="state.inputs.annualTaxableIncomeRange"
                            />
                            <InfoText :infoText="methods.getContent('Step3_RiskTolerance_Info')" />
                        </div>
                    </div>
                    <div>
                        <BaseHeading class="radioHeading">
                            <template #default>
                                {{ methods.getContent('Step3_EmployerContribution_Label') }} 
                                <span class="required">*</span>
                            </template>
                        </BaseHeading>
                        <div class="form-field-container">
                            <BaseRadioButtonGroup 
                            v-on:click="callBack" 
                            :model="riskFactor.model" />
                            <InfoText :infoText="methods.getContent('Step3_EmployerContribution_Info')" />
                        </div>
                    </div>
                </form>
                <BaseChart :options="chartOptions" chartType="chart"/>
                <InfoText :infoText="infoText" />
            </div>
        </template>

        <template #buttons>
            <div class="sparplanrechner-button_container double">
                <RouterLink to="/state-funding">
                    <BaseButton 
                        @click="methods.updateStepper('3', '', 'back')"  
                        size="large" 
                        type="secondary" 
                        :linkModel="{
                            ...linkModel,
                            title: 'To StaalicheFörderung',
                            text: methods.getContent('Step3_BackButton')
                        }"   
                    />
                </RouterLink>
                <RouterLink to="/topic-selection">
                    <BaseButton 
                        size="large" 
                        type="primary" 
                        :linkModel="{
                            ...linkModel,
                            title: 'To Themenauswhal',
                            text: methods.getContent('Step3_NextButton')
                        }" 
                    />
                </RouterLink>
            </div>
        </template>
    </Sparplanrechner>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .input-container {
        display: flex;
        width: 100%;
    }

    .input-container div {
        width: 50%;
    }

    .form-input {
        width: 252px !important;
        height: 100%;
    }

    .form-field-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .infoText-container {
        width: 90% !important;
    }

    @media screen and (max-width: 1024px) {
        .input-container {
        display: flex;
            flex-direction: column;
            gap: 32px;
            width: 100%;
        }
        .input-container div {
            width: 100%;
        }
        .form-input {
            width: 100% !important;
        }
    }
</style>

<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
    import Sparplanrechner from '../components/Sparplanrechner.vue';
    import Stepper from '../components/stepper.vue';
    import { inject } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    import { BaseButton, BaseRadioButtonGroup, BaseText } from 'dws-dx'
    import InfoText from '../components/InfoText.vue';

    const store = inject('store');
    const state = store.state
    const methods = store.methods
    const linkModel = store.models.linkModel

    

    const relationshipStatus = {
        baseHeadingText: "Page Headline",
        baseHeadingType: "H4",
        default: {},
        model: {
            isDisabled: false,
            isValid: true,
            selectedItem: {
                id: "1",
                name: methods.getContent('Step2_RadioButton1')
            },
            items: [
                {
                    id: "1",
                    name: methods.getContent('Step2_RadioButton1')
                },
                {
                    id: "2",
                    name: methods.getContent('Step2_RadioButton2')
                }
            ]
        }
    }

    const income = {
        baseHeadingText: "Page Headline",
        baseHeadingType: "H4",
        default: {},
        model: {
            isDisabled: false,
            isValid: true,
            selectedItem: {
                id: "1",
                name: "weniger als 20.000"
            },
            items: [
            {
                    id: "1",
                    name: "weniger als 20.000"
                },
                {
                    id: "2",
                    name: "20.001 - 40.000"
                },
                {
                    id: "3",
                    name: "40.001 - 60.000"
                },
                {
                    id: "4",
                    name: "61.000 - 80.000"
                },
                {
                    id: "5",
                    name: "mehr als 80.000"
                }
            ]
        }
    }

    onBeforeRouteLeave((to)=> {
        // Input verification needed
        if (!(to.name === 'Einführung')) {
            methods.updateStepper('2', 'complete', 'forward');
        }else {
            methods.updateStepper('2', '', 'back')
        }

        return true
    });
</script>

<template>
    <Sparplanrechner>
        <template #sparplanrechner-header>
            <div class="sparplanrechner-header header-light">{{ methods.getContent('Step2_Headline-Grey') }}
                <span class="header-dark">{{ methods.getContent('Step2_Headline-Black') }}</span>
            </div>
        </template>

        <template #stepper>
            <Stepper />
        </template>

        <template #main-content>
            <div class="main-content">
                <div>
                    <BaseHeading class="radioHeading" >
                        <template #default>
                            {{ methods.getContent('Step2_RadioButtons_Label') }}
                            <span class="required">*</span>
                        </template>
                    </BaseHeading>
                    <BaseRadioButtonGroup 
                        class="relationshipStatus"
                        :model="relationshipStatus.model" 
                    />
                </div>
                <div>
                    <BaseHeading class="radioHeading">
                        <template #default>
                            {{ methods.getContent('Step2_Income_Label') }}
                            <span class="required">*</span>
                        </template>
                    </BaseHeading>
                    <BaseRadioButtonGroup 
                        :model="income.model" />
                </div>
                <InfoText :infoText="methods.getContent('Step2_Income_Info')"/>
            </div>
        </template>

        <template #buttons>
            <div class="sparplanrechner-button_container double">
                <RouterLink to="/">
                    <BaseButton 
                        size="large" 
                        type="secondary" 
                        :linkModel="{
                            ...linkModel,
                            title: 'To Einführung',
                            text: methods.getContent('Step2_BackButton')
                        }"  
                    />
                </RouterLink>
                <RouterLink to="/payout-sum">
                    <BaseButton 
                        size="large" 
                        type="primary" 
                        :linkModel="{
                            ...linkModel,
                            title: 'To Auszahlungssumme',
                            text: methods.getContent('Step2_NextButton')
                        }"  
                    />
                </RouterLink>
            </div>
        </template>
    </Sparplanrechner>
</template>

<style scoped>
    .relationshipStatus {
        display: flex;
        gap: 64px
    }

    @media screen and (max-width: 1024px) {
        .relationshipStatus {
        display: flex;
            flex-direction: column;
            gap: 0;
        }
    }

</style>
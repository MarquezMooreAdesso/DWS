<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
    import Sparplanrechner from '../components/Sparplanrechner.vue';
    import Stepper from '../components/stepper.vue';
    import TopicSelector from '../components/TopicSelector.vue'
    import { inject } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    import { 
        BaseButton, 
        // TopicSelectorContainer, 
        // TopicSelectorItem,
        BaseText, 
    } from 'dws-dx'

    const store = inject('store')
    const linkModel = store.models.linkModel
    const methods = store.methods
    
    onBeforeRouteLeave((to)=> {
        // Input verification needed
        if (!(to.name === 'Auszahlungssumme')) {
            methods.updateStepper('4', 'complete', null);
        }else {
            methods.updateStepper('4', '', 'back')
        }

        return true
    });
</script>

<template>
    <Sparplanrechner>
        <template #sparplanrechner-header>
            <div class="sparplanrechner-header header-light">{{ methods.getContent('Step4_Headline-Grey') }}
                <span class="header-dark">{{ methods.getContent('Step4_Headline-Black') }}</span>
            </div>
        </template>

        <template #stepper>
            <Stepper />
        </template>

        <template #main-content>
                <BaseText :text="methods.getContent('Step4_Topics_Headline')"/>
                <TopicSelector />
        </template>

        <template #buttons>
            <div class="sparplanrechner-button_container double">
                <RouterLink to="/payout-sum">
                    <BaseButton 
                        size="large" 
                            type="secondary" 
                            :linkModel="{
                                ...linkModel,
                                title: 'To Auszahlungssumme',
                                text: methods.getContent('Step4_BackButton')
                            }"  
                    />
                </RouterLink>
                <RouterLink to="#">
                    <BaseButton 
                        size="large" 
                            type="primary" 
                            :linkModel="{
                                ...linkModel,
                                title: 'Complete',
                                text: methods.getContent('Step4_NextButton')
                            }"  
                    />
                </RouterLink>
            </div>
        </template>
    </Sparplanrechner>
</template>


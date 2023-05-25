<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
    import Sparplanrechner from '../components/Sparplanrechner.vue';
    import Stepper from '../components/stepper.vue';
    import { RouterLink } from 'vue-router';
    import { inject} from 'vue';
    import { BaseButton, BaseText } from 'dws-dx'

    const store = inject('store')
    const linkModel = store.models.linkModel
    const methods = store.methods;
</script>

<template>
    <Sparplanrechner>
        <template #sparplanrechner-header>
            <div class="sparplanrechner-header header-light">{{ methods.getContent('Step1_Headline-Grey') }}
                <span class="header-dark">{{ methods.getContent('Step1_Headline-Black') }}</span>
            </div>
        </template>

        <template #stepper>
            <Stepper />
        </template>

        <template #main-content>
            <div class="main-content">
                <BaseText
                    :text="methods.getContent('Step1_IntroText')"
                />
            </div>
        </template>

        <template #buttons>
            <div class="sparplanrechner-button_container">
                <RouterLink to="/state-funding" > 
                    <BaseButton 
                        @click="methods.updateStepper('1', 'complete', 'forward')" 
                        size="large" 
                        type="primary" 
                        :linkModel="{
                            ...linkModel,
                            title: 'To Staalicheförderung',
                            text: methods.getContent('Step1_NextButton')
                        }" 
                    />
                </RouterLink>
            </div>
        </template>
    </Sparplanrechner>
</template>


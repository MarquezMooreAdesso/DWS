<script setup>
    import { inject } from 'vue'
    import { BaseHeading, BaseText } from 'dws-dx'

    const store = inject('store')
    const state = store.state
    const methods = store.methods    
</script>

<template>
    <table class="accordion-container">
        <tr class="accordionItem-container" v-for="(item, index) in state.topics" :key="index" >
            <td :id="item.Id" class="accordionItem" @click="methods.toggleTopic" :class="{selected: item.isSelected}">
                <div class="accordionLeft" @click="methods.toggleTopic">
                    <div class="accordionImage-container">
                        <img class="accordionImage" :src="item.Image" alt="">
                    </div>
                    <div class="accordionCopy-container">
                        <BaseHeading class="accordionHeader">
                            <template #default>
                                <span class="mainHeader">{{ item.Heading }}</span>
                                <span class="subHeader">{{ item.Description }}</span>
                            </template>
                        </BaseHeading>
                    </div>
                </div>
                <div class="accordionRight">
                    <i v-if="item.isSelected" class="pi pi-check"></i>
                </div>
            </td>
        </tr>
    </table>
</template>

<style scoped>
    .accordion-container {
        border-collapse: collapse;
        border-spacing: 0 4px;
    }

    .accordionLeft {
        display: flex;
        gap: 20px;
        pointer-events: none;
    }
    .accordionRight {
        padding-right: 38px;
        pointer-events: none;
    }
    .accordionRight i {
        font-weight: 700;
        width: 20px;
        height: 20px;
    }
    .accordion-container td:last-of-type {
        margin-left: auto;
    }
    .accordionItem-container {
        border: 4px solid #EBEEF0;
        border-left: none;
        border-right: none;
    }
    .accordionItem-container:hover {
        border: none;
    }
    .accordionItem-container:hover td  {
        border: 4px solid #006366;
        border-left: none;
        border-right: none;
    }
    .accordionItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0 20px 0;
    }
    .accordionItem.selected {
        border-top: 4px solid #006366;;
    }
    .accordionImage-container {
        width: 61px;
        height: 56px;
    }
    .accordionImage {
        border-radius: 12px;
        max-width: 100%;
        height: auto;
    }
    .accordionHeader {
        display: flex;
        flex-direction: column;
    }
    .mainHeader {
        font-weight: 400 !important;
    }
    .subHeader {
        font-weight: 300 !important;
        font-size: 16px;
    }

    @media screen and (max-width: 1024px) {
        .accordionImage-container {
            display: none;
        }
    }
</style>
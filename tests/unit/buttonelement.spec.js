import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ButtonElement from '@/components/ButtonElement.vue'

describe('ButtonElement.vue', () => {

    it('should contains c-button--default class', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {}
        });
        expect(wrapper.classes('c-button--default')).that.is.true;
    });

    it('should contains c-button--outline class if variant="outline"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                variant: 'outline'
            }
        });
        expect(wrapper.classes('c-button--outline')).that.is.true;
    });

    it('should contains c-button--text class if variant="text"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                variant: 'text'
            }
        });
        expect(wrapper.classes('c-button--text')).that.is.true;
    });

    it('should contains c-button--disbale-shadow class if disableShadow is true', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                disableShadow: true
            }
        });
        expect(wrapper.classes('c-button--disbale-shadow')).that.is.true;
    });

    it('should not contains c-button--disbale-shadow class if disableShadow is false', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                disableShadow: false
            }
        });
        expect(wrapper.classes('c-button--disbale-shadow')).that.is.false;
    });

    it('should contains classes that are passed in class property', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                class: "class1  class2"
            }
        });
        expect(wrapper.classes('class1')).that.is.true;
        expect(wrapper.classes('class2')).that.is.true;
    });

    it('should contains c-button--middle-size class if size is not defined', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
            }
        });
        expect(wrapper.classes('c-button--middle-size')).that.is.true;
    });

    it('should contains c-button--small-size class if size="sm"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                size: 'sm'
            }
        });
        expect(wrapper.classes('c-button--small-size')).that.is.true;
    });

    it('should contains c-button--large-size class if size="sm"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                size: 'lg'
            }
        });
        expect(wrapper.classes('c-button--large-size')).that.is.true;
    });

    it('should contains c-button--color-default class if color is not defined', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
            }
        });
        expect(wrapper.classes('c-button--color-default')).that.is.true;
    });

    it('should contains c-button--color-primary class if color="primary"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                color: 'primary'
            }
        });
        expect(wrapper.classes('c-button--color-primary')).that.is.true;
    });

    it('should contains c-button--color-secandory class if color="secandory"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                color: 'secandory'
            }
        });
        expect(wrapper.classes('c-button--color-secandory')).that.is.true;
    });

    it('should contains c-button--color-danger class if color="danger"', () => {
        const wrapper = shallowMount(ButtonElement, {
            propsData: {
                color: 'danger'
            }
        });
        expect(wrapper.classes('c-button--color-danger')).that.is.true;
    });
})
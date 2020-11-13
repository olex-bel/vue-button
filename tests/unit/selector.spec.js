import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import Selector from "@/components/Selector";

describe('Selector.vue', () => {
    it('should contains selector', () => {
        const wrapper = shallowMount(Selector, {
            propsData: {
                items: [],
                label: 'test'
            }
        });
        expect(wrapper.classes('selector')).that.is.true;
    });

    it('should show placeholder if default value is not provided', () => {
        const wrapper = shallowMount(Selector, {
            propsData: {
                items: [{
                    value: 'value1',
                    label: 'text1'
                }],
                placeholder: 'placeholder',
                label: 'test'
            }
        });

        expect(wrapper.vm.displayValue).to.be.eq('placeholder');
    });

    it('should show label for selected default value', () => {
        const wrapper = shallowMount(Selector, {
            propsData: {
                items: [{
                    value: 'value1',
                    label: 'text1'
                }],
                defaultValue: 'value1',
                placeholder: 'placeholder',
                label: 'test'
            }
        });

        expect(wrapper.vm.displayValue).to.be.eq('text1');
    });

    it('should set isActive=true if method open is called', () => {
        const wrapper = shallowMount(Selector, {
            propsData: {
                items: [{
                    value: 'value1',
                    label: 'text1'
                }],
                placeholder: 'placeholder',
                label: 'test'
            }
        });

        wrapper.vm.isActive = false;
        wrapper.vm.open();
        expect(wrapper.vm.isActive).to.be.true;
    });

    it('should set isActive=false if method close is called', () => {
        const wrapper = shallowMount(Selector, {
            propsData: {
                items: [{
                    value: 'value1',
                    label: 'text1'
                }],
                placeholder: 'placeholder',
                label: 'test'
            }
        });


        wrapper.vm.isActive = true;
        wrapper.vm.close();
        expect(wrapper.vm.isActive).to.be.false;
    });

    it('should trigger event SelectorChange if item selected', () => {
        const wrapper = shallowMount(Selector, {
            propsData: {
                items: [{
                    value: 'value1',
                    label: 'text1'
                }],
                placeholder: 'placeholder',
                label: 'test'
            }
        });

        wrapper.vm.select(0);
        expect(wrapper.vm.value).to.be.eq('value1');
        expect(wrapper.emitted('SelectorChange')).is.ok;
    });
});
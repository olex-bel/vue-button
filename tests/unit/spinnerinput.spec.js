import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import SpinnerInput from "@/components/SpinnerInput";

describe('SpinnerInput.vue', () => {
    it('should contains spinnerinput--container', () => {
        const wrapper = shallowMount(SpinnerInput, {});
        expect(wrapper.classes('spinnerinput--container')).that.is.true;
    });

    it('should set default value if it is provided', () => {
        const wrapper = shallowMount(SpinnerInput, {
            propsData: {
                defaultValue: 5
            }
        });
        expect(wrapper.vm.value).to.be.eq(5);
    });

    it('should increment value on click by increment button click', async () => {
        const wrapper = shallowMount(SpinnerInput, {});
        const button = wrapper.find('.spinnerinput--increment');

        await button.trigger('click')

        expect(wrapper.vm.value).to.be.eq(1);
        expect(wrapper.emitted('ValueChanged')).is.ok;
    });

    it('should decrement value on click by decrement button click', async () => {
        const wrapper = shallowMount(SpinnerInput, {
            propsData: {
                defaultValue: 5
            }
        });
        const button = wrapper.find('.spinnerinput--decrement');

        await button.trigger('click')

        expect(wrapper.vm.value).to.be.eq(4);
        expect(wrapper.emitted('ValueChanged')).is.ok;
    });

    it('should not change value if it is 0 by decrement button click', async () => {
        const wrapper = shallowMount(SpinnerInput, {});
        const button = wrapper.find('.spinnerinput--decrement');

        await button.trigger('click')

        expect(wrapper.vm.value).to.be.eq(0);
        expect(wrapper.emitted('ValueChanged')).is.not.ok;
    });
});
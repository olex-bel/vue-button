import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import Selector from "@/components/DropdownContent";

describe('DropdownContent.vue', () => {
    it('should contains dropdowncontent', () => {
        const wrapper = shallowMount(Selector, {
        });
        expect(wrapper.classes('dropdowncontent')).that.is.true;
    });

    it('should set isActive=true if method open is called', () => {
        const wrapper = shallowMount(Selector, {});

        wrapper.vm.isActive = false;
        wrapper.vm.open();
        expect(wrapper.vm.isActive).to.be.true;
    });

    it('should set isActive=false if method close is called', () => {
        const wrapper = shallowMount(Selector, {});

        wrapper.vm.isActive = true;
        wrapper.vm.close();
        expect(wrapper.vm.isActive).to.be.false;
    });
});
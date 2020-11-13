import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import PropertyGrid from "@/components/PropertyGrid";

describe('PropertyGrid.vue', () => {
    it('should contains propertygrid', () => {
        const wrapper = shallowMount(PropertyGrid, {
            propsData: {
                items: []
            }
        });
        expect(wrapper.classes('propertygrid')).that.is.true;
    });
});
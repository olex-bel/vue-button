import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import PropertyTile from "@/components/PropertyTile";

describe('PropertyTile.vue', () => {
    it('should contains property-tile--container', () => {
        const wrapper = shallowMount(PropertyTile, {
            propsData: {
                property: {
                    rating: 4.1
                }
            }
        });
        expect(wrapper.classes('property-tile--container')).that.is.true;
    });

    describe('rating', () => {
        it('should return string value', () => {
            const wrapper = shallowMount(PropertyTile, {
                propsData: {
                    property: {
                        rating: 5
                    }
                }
            });

            expect(wrapper.vm.rating).to.be.an('string');
        });

        it('should return value with two decimal digits after comma', () => {
            const wrapper = shallowMount(PropertyTile, {
                propsData: {
                    property: {
                        rating: 5
                    }
                }
            });

            expect(wrapper.vm.rating).to.be.eq('5.00');
        });
    });

    describe('type', () => {
        it('should return property type if number of beds is undefined', () => {
            const type = 'Private room';
            const wrapper = shallowMount(PropertyTile, {
                propsData: {
                    property: {
                        rating: 4,
                        type: type
                    }
                }
            });

            expect(wrapper.vm.type).to.be.eq(type);
        });

        it('should return property type with number of beds', () => {
            const wrapper = shallowMount(PropertyTile, {
                propsData: {
                    property: {
                        rating: 4,
                        type: 'Private room',
                        beds: 2
                    }
                }
            });

            expect(wrapper.vm.type).to.be.eq('Private room. 2 beds');
        });

        it('should return property type with 1 bed', () => {
            const wrapper = shallowMount(PropertyTile, {
                propsData: {
                    property: {
                        rating: 4,
                        type: 'Private room',
                        beds: 1
                    }
                }
            });

            expect(wrapper.vm.type).to.be.eq('Private room. 1 bed');
        });
    });
});
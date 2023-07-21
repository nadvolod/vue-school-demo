
import { $, expect } from '@wdio/globals'
import { render } from '@testing-library/vue'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import HelloWorld from './HelloWorld.vue'

describe('Vue Component Testing', () => {
    
    it('should test component with Testing Library', async () => {
        // The render method returns a collection of utilities to query your component.
        const { getByText } = render(HelloWorld, {})
        expect(getByText(/vue-cli documentation/i)).toBeInTheDocument()
    })
    

    it('should test component with WebdriverIO', async () => {
        render(HelloWorld, {})

        const link = await $('=vue-cli documentation')
        await expect(link).toBePresent()
        await expect(link).toHaveText('vue-cli documentation')
    })
})

import { test, expect } from '@playwright/test'

test('reveals the punchline, counts a groan, and moves to another joke', async ({ page }) => {
  await page.goto('/')

  const setup = page.locator('.setup')
  const punchline = page.locator('.punchline')
  const groans = page.locator('.groans')

  await expect(setup).not.toBeEmpty()
  await expect(groans).toHaveText('No groans yet. Tough crowd.')
  const firstSetup = await setup.textContent()

  await page.getByRole('button', { name: 'Hit me with the punchline' }).click()
  await expect(punchline).toHaveText(/\S/)
  await expect(groans).toHaveText('Groans delivered: 1')

  await page.getByRole('button', { name: 'Hit me with another one' }).click()
  await expect(setup).not.toHaveText(firstSetup)
  await expect(page.getByRole('button', { name: 'Hit me with the punchline' })).toBeVisible()
  await expect(groans).toHaveText('Groans delivered: 1')
})

import { Selector, t } from 'testcafe'

fixture `Getting started with Testcafe`
    .page `https://dana.id/`

test('1st testcase', async t => {
  const btnLangEn = Selector('.btn-lang-en')

  await t.click(btnLangEn)
})

test('2st testcase', async t => {
    const linkFAQ = Selector('a').withText('FAQ')
  
    await t.click(linkFAQ)
  })

  test('3rd testcase', async t => {
    const linkFAQ = Selector('a').withText('FAQ')
    const searchField = Selector('#frontpage > section.content > section.faq-cover > div > div > div.faq-search > form > input[type=text]:nth-child(2)')
  
    await t.click(linkFAQ)
    await t.typeText(searchField,'merchant')
  })
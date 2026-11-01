import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SERVICES,
  COMPANY_CONTACT,
  formatCurrencyCRC,
  formatCurrencyUSD,
  formatDualPrice,
  buildWhatsAppLink,
  validateContactForm,
  calculateTotalEstimate
} from './pricing';

test('SERVICES contains exactly 3 mandatory products/services with CRC & USD prices', () => {
  assert.equal(SERVICES.length, 3);
  for (const s of SERVICES) {
    assert.ok(s.id.length > 0);
    assert.ok(s.name.length > 0);
    assert.ok(s.priceCRC > 0);
    assert.ok(s.priceUSD > 0);
    assert.ok(s.features.length >= 3);
  }
});

test('COMPANY_CONTACT is set to Costa Rica with +506 prefix', () => {
  assert.equal(COMPANY_CONTACT.country, 'Costa Rica');
  assert.equal(COMPANY_CONTACT.countryCode, '+506');
  assert.ok(COMPANY_CONTACT.phoneDisplay.startsWith('+506'));
  assert.ok(COMPANY_CONTACT.whatsappNumber.startsWith('506'));
  assert.ok(COMPANY_CONTACT.address.includes('Costa Rica'));
});

test('formatCurrencyCRC and formatCurrencyUSD format regional currencies properly', () => {
  const crc = formatCurrencyCRC(180000);
  assert.ok(crc.includes('180'));
  assert.ok(crc.includes('CRC'));

  const usd = formatCurrencyUSD(350);
  assert.ok(usd.includes('350'));
  assert.ok(usd.includes('USD'));

  const dual = formatDualPrice(180000, 350, 'CRC');
  assert.ok(dual.includes('CRC'));
  assert.ok(dual.includes('USD'));
});

test('buildWhatsAppLink generates valid Costa Rica WhatsApp URL', () => {
  const link = buildWhatsAppLink('Diseño Web & Landing Page Pro');
  assert.ok(link.startsWith('https://wa.me/50687123456'));
  assert.ok(link.includes('text='));
  assert.ok(link.includes('Costa%20Rica'));
});

test('validateContactForm correctly validates fields', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    phone: '123',
    serviceId: 'web-design',
    message: 'short'
  });
  assert.equal(invalid.isValid, false);

  const valid = validateContactForm({
    name: 'Esteban Solís',
    email: 'esteban@negocio.cr',
    phone: '+506 8899 1122',
    serviceId: 'web-design',
    message: 'Hola Lumina, busco diseñar el sitio web para mi empresa en San José, Costa Rica.'
  });
  assert.equal(valid.isValid, true);
});

test('calculateTotalEstimate calculates base, addons and discount in CRC', () => {
  const base = calculateTotalEstimate('web-design', [], undefined, 'CRC');
  assert.equal(base.total, 180000);
  assert.equal(base.discount, 0);
  assert.equal(base.finalTotal, 180000);

  const withDiscount = calculateTotalEstimate('web-design', [], 'EMPRENDE10', 'CRC');
  assert.equal(withDiscount.discount, 18000);
  assert.equal(withDiscount.finalTotal, 162000);
});

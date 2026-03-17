document.getElementById('laundryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesanan Anda telah diterima. Tim kami akan segera menghubungi Anda via WhatsApp.');
    this.reset();
});
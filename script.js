const inputData = document.getElementById('data');

// Bloquear datas passadas
const hoje = new Date().toISOString().split('T')[0];
inputData.setAttribute('min', hoje);

// Bloquear Finais de Semana (Sáb=6, Dom=0)
inputData.addEventListener('input', function() {
    const d = new Date(this.value);
    const dia = d.getUTCDay();
    if (dia === 0 || dia === 6) {
        alert('Selecione um dia útil (Segunda a Sexta).');
        this.value = '';
    }
});

// Enviar via WhatsApp
document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // COLOQUE SEU NÚMERO AQUI (Ex: 5511999999999)
    const telOficina = "5500000000000"; 

    const nome = document.getElementById('nome').value;
    const carro = document.getElementById('carro').value;
    const placa = document.getElementById('placa').value;
    const km = document.getElementById('km').value;
    const ano = document.getElementById('ano').value;
    const data = document.getElementById('data').value.split('-').reverse().join('/');
    const servico = document.getElementById('servico').value;
    const obs = document.getElementById('obs').value || "Nenhuma";

    const msg = `*NOVO AGENDAMENTO*%0A%0A` +
                `👤 *Cliente:* ${nome}%0A` +
                `🚗 *Carro:* ${carro} (${ano})%0A` +
                `🔢 *Placa:* ${placa}%0A` +
                `🛣️ *KM:* ${km}%0A` +
                `📅 *Data:* ${data}%0A` +
                `🛠️ *Serviço:* ${servico}%0A` +
                `📝 *Obs:* ${obs}`;

    window.open(`https://wa.me/${telOficina}?text=${msg}`, '_blank');
});
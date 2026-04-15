# Trabalho-15-04-26---Last-Will-e-Retain-Flag

1. Last Will and Testament (LWT)
----
 **O que é:**

O Last Will é uma mensagem configurada pelo cliente no momento da conexão com o broker.
Ela só será enviada automaticamente se o cliente cair de forma inesperada.

**Quando usar:**

Use LWT quando você precisa saber se um dispositivo:

- Perdeu conexão inesperadamente
- Travou ou desligou sem aviso
- Está indisponível

**Exemplos reais:**
- Sensores IoT (temperatura, umidade)
- Dispositivos industriais
- Sistemas de monitoramento remoto
- Aplicações críticas (ex: saúde, segurança)

Impactos no sistema IoT
----
**Positivos:**

- Detecção rápida de falhas
- Maior confiabilidade do sistema
- Permite ações automáticas (alertas, fallback)

**Negativos / cuidados:**

- Pode gerar falsos alertas (ex: instabilidade de rede)
- Precisa de um bom controle de reconexão

2. Retain Flag
----
**O que é:**

A flag retain faz com que o broker guarde a última mensagem publicada em um tópico.

Quando um novo cliente se inscreve nesse tópico, ele recebe imediatamente a última mensagem, mesmo que tenha sido enviada no passado.

**Quando usar:**

Use retain quando você precisa manter um estado atual persistente, como:

- Status de dispositivos (online/offline)
- Última leitura de sensor
- Configurações do sistema

**Exemplos reais**
----
- Dashboard IoT mostrando último valor conhecido
- Estado de lâmpadas inteligentes
- Sistema de automação residencial

**Impactos no sistema IoT**
----
Positivos:

- Novos clientes recebem o estado imediatamente
- Reduz necessidade de polling
- Melhora sincronização do sistema

Negativos / cuidados:

- Pode mostrar dados antigos (stale data)
- Precisa limpar manualmente (publicar mensagem vazia)
- Pode causar confusão se mal utilizado

**Diferença prática**
----

- Recurso:	Função principal
- Last Will:	Detectar falhas inesperadas
- Retain:	Manter último estado disponível

Em sistemas reais, os dois são usados juntos.

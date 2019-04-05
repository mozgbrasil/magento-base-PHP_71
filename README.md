[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"
![valid XHTML][checkmark]

[requerimentos]: http://mozgbrasil.github.io/requerimentos/
[getcomposer]: https://getcomposer.org/
[uninstall-mods]: https://getcomposer.org/doc/03-cli.md#remove
[git-releases]: https://github.com/mozgbrasil/magento-base-php_71/releases
[artigo-composer]: http://mozg.com.br/ubuntu/composer
[ioncube-loader]: http://www.ioncube.com/loaders.php
[acordo]: http://mozg.com.br/acordo-licenca-usuario-final/
[tickets]: https://cerebrum.freshdesk.com/support/tickets/new

# Mozg\Base

## Sinopse

Módulo requerido para funcionamento dos demais módulos

## Motivação

Atender o mercado de módulos para Magento oferecendo um excelente suporte

## Suporte / Dúvidas

Para obter o devido suporte [Clique aqui][tickets], relatando o motivo da ocorrência o mais detalhado possível e anexe o print da tela para nosso entendimento

Se preferir, instale o respectivo plugin do Chrome para gravar o seu Screencast

https://chrome.google.com/webstore/detail/loom-video-recorder-scree/liecbddmkiiihnedobmlmillhodjkdmb

## Característica técnica

Uso interno

## Testando na Heroku

Gostaria de apresentar o aplicativo que disponibilizei para a plataforma Heroku

Com apenas 1 clique, o aplicativo cria sua loja virtual usando a plataforma de comércio eletrônico Magento e instala os módulos da MOZG

[https://github.com/mozgbrasil/heroku-magento#descrição](https://github.com/mozgbrasil/heroku-magento#descrição)

## Instalação - Atualização - Desinstalação - Desativação

--

Sugiro "printar" as telas com todos os procedimentos executados

Envie para nós as imagens das telas na eventualidade de quaisquer dificuldades

--

Este módulo destina-se a ser instalado usando o [Composer][getcomposer]

Execute o seguinte comando no terminal, para visualizar a existencia do Composer e sua versão

	composer --version

Caso não tenha o Composer em seu ambiente, sugiro ler o seguinte artigo [Clique aqui][artigo-composer]

--

É necessário que o servidor tenha o suporte a extensão [ionCube PHP Loader][ioncube-loader]

Para visualizar a existência da extensão nesse ambiente denominado PHP CLI, execute o seguinte comando no terminal

	php -v

Para visualizar se essa extensão está ativa em seu servidor no ambiente denominado PHP WEB

Certique se da presença do arquivo phpinfo.php na raiz do seu projeto

	<?php phpinfo(); ?>

Caso não exista o arquivo phpinfo.php na raiz do projeto Magento, crie o mesmo adicionado o conteúdo acima

Acesse o arquivo pelo browser

Em seguida pesquise pelo termo "ionCube PHP Loader"

Caso o seu servidor não tenha o suporte a extensão, entre em contato com sua empresa de hospedagem e peça para que eles ativem a extensão

Caso tenha a permissão e queira ativar a extensão, [Clique aqui][ioncube-loader]

Em "Loader Downloads API", efetue download do pacote compatível com o seu servidor

Descompacte o pacote e faça upload do arquivo "loader-wizard.php" para seu servidor, onde será demonstrado o passo a passo para a ativação da extensão

[Clique aqui](https://youtu.be/GZ2J6MLkko4) para ver os processos executados

--

Na presença do "ionCube PHP Loader" efetue o download do seguinte arquivo e coloque na raiz do seu servidor e acesse, se funcionar quer dizer que o "ionCube" está lendo esse tipo de encriptação

https://raw.githubusercontent.com/mozgbrasil/heroku-magento/master/phpinfo-ioncube-encoder10-x86-64-php_71.php

--

Para utilizar o(s) módulo(s) da MOZG é necessário aceitar o [Acordo de licença do usuário final][acordo]

--

Sugiro manter um ambiente de testes para efeito de testes e somente após os devidos testes aplicar os devidos procedimento no ambiente de produção

--

Sugiro efetuar backup da plataforma Magento e do banco de dados

--

Antes de efetuar qualquer atualização no Magento sempre mantenha o Compiler e o Cache desativado

--

Certique se da presença do arquivo composer.json na raiz do seu projeto Magento e que o mesmo tenha os parâmetros semelhantes ao modelo JSON abaixo

	{
	  "minimum-stability": "dev",
	  "prefer-stable": true,
	  "license": [
	    "proprietary"
	  ],
	  "repositories": [
	    {
	      "type": "composer",
	      "url": "https://packages.firegento.com"
	    }
	  ],
	  "extra": {
	    "magento-root-dir": "./",
	    "magento-deploystrategy": "copy",
	    "magento-force": true
	  }
	}

Caso não exista o arquivo composer.json na raiz do projeto Magento, crie o mesmo adicionado o conteúdo acima

### Para instalar o módulo execute o comando a seguir no terminal do seu servidor no diretório do seu projeto

	composer require mozgbrasil/magento-base-php_71:dev-master

Você pode verificar se o módulo está instalado, indo ao backend em:

	STORES -> Configuration -> ADVANCED/Advanced -> Disable Modules Output

--

### Para atualizar o módulo execute o comando a seguir no terminal do seu servidor no diretório do seu projeto

Antes de efetuar qualquer processo que envolva atualização no Magento é recomendado manter o Compiler e Cache desativado

	composer update

Na ocorrência de erro, renomeie a pasta /vendor/mozgbrasil e execute novamente

Para checar a data do módulo execute o seguinte comando

	grep -ri --include=*.json 'time": "' ./vendor/mozgbrasil

### Para usar uma versão especifica do módulo

Primeiro acesse as versões disponibilizadas acessando os [releases][git-releases]https://github.com/mozgbrasil/magento-base-php_71/releases

Utilize a versão que atenda a data correspondente a seu arquivo de licença

Para isso altere no arquivo composer.json para a devida versão

    "require" : {
        "mozgbrasil/magento-base-php_71": "1.0.0"

Em seguida execute o comando a seguir no terminal do seu servidor

	composer update

--

### Para [desinstalar][uninstall-mods] o módulo execute o comando a seguir no terminal do seu servidor

	composer remove mozgbrasil/magento-base-php_71

--

### Para desativar o módulo

1. Antes de efetuar qualquer processo que envolva atualização sobre o Magento é necessário manter o Compiler e Cache desativado

2. Caso queira desativar os módulos da MOZG renomeie a seguinte pasta app/code/local/Mozg

A desativação do módulo pode ser usado para detectar se determinada ocorrência tem relação com o módulo

## Como configurar o método

Para configurar o método, acesse no backend em:

	STORES -> Configuration -> MOZG -> Geral

Você terá os campos a seguir

### Configurações Padrão

#### Recursos

##### • **Ativar estilo ao IWD_Opc**

Ativa o recurso

##### • **Ativar barra de progresso no painel de controle da loja virtual**

Ativa o recurso

##### • **Ativar barra de progresso na finalização do pedido**

Ativa o recurso

##### • **Ativar botão "Dump" na visualização do pedido**

Usado para analise de dados

##### • **Ativar botão "Trajeto" na visualização do pedido**

Mostra o trajeto entre o endereço da loja e do cliente

#### Debugar

##### • **Exibir nomes dos blocos**

Usado para debug

## Perguntas mais frequentes "FAQ"

### Sugestões importante

* Antes de efetuar qualquer atualização no Magento sempre mantenha o Compiler e o Cache desativado

* Sugiro efetuar backup da plataforma Magento e do banco de dados

* Sugiro "printar" as telas com todos os procedimentos executados e se necessário me envie as imagens das telas na eventualidade de quaisquer dificuldades

* Sugiro manter um ambiente de testes para efeito de testes e somente após os devidos testes aplicar os devidos procedimento no ambiente de produção

# Server Error
# cURL error 6: Could not resolve host: api.cieloecommerce.cielo.com.br (see http://curl.haxx.se/libcurl/c/libcurl-errors.html)
# 370 - Could not resolve host: api.userede.com.br

Se trata de ocorrência relacionada ao servidor, informe o administrador do servidor a ocorrência

Talvez o artigo a seguir possa ajudar

https://stackoverflow.com/questions/24967855/curl-6-could-not-resolve-host-google-com-name-or-service-not-known

### Sobre logradouro sem número

Foi contatado o CAC

http://www.correios.com.br/sobre-correios/acesso-a-informacao/acesso-a-informacao

e o atendente confirmou que essa é a pratica correta de forçar o usuario a digitar o zero caso não tenha o numero para o logradouro

Tanto que vemos no formulario dos correios

http://www2.correios.com.br/sistemas/falecomoscorreios/

Que para o número não é permitido digitar s/n, devendo informar 0 e para o complemento o restante das informações como Quadra e Lote

### Sobre os registros no histórico do pedido
### Sobre repostar a notificação da transação de pagamento

Veja no manual o funcionamento do módulo

https://github.com/mozgbrasil/magento-cielo-php_71#v%C3%ADdeos-demonstrativo

https://github.com/mozgbrasil/magento-cielo-php_56#caracter%C3%ADstica-t%C3%A9cnica

Se atente ao histórico do pedido

Os 3 primeiros registros é relativo a finalização do pedido

Conforme a apresentação em

https://www.youtube.com/watch?v=oag7gee5R54&feature=youtu.be

Sendo especificado no minuto 1:51

O terceiro histórico se trata de um evento que é executado na finalização do pedido com o intuito de alterar o status do pedido para "Pendente"

Se atende aos demais histórico relativo a notificação da transação que é exibido

Caso por qualquer motivo a notificação não tenha sido processada ou mesmo excluída, acesse o pedido no Magento e clique no link em "Consultar" no bloco "Informações de Pagamento", dessa forma deve ser criado um registro a ser processado, caso queira visualizar os registros de notificação acesse: Vendas -> Fila de notificação

### Sobre conflitos entre módulos ou template

Devido a possibilidade de conflitos entre módulos ou template a base para o funcionamento de qualquer módulo será sempre a plataforma nativa

Caso o módulo não esteja se comportando como esperado siga os seguintes procedimentos

http://mozg.com.br/dicas/dicas-magento1#ocorreu-erro-na-loja-ou-processo-n%C3%A3o-est%C3%A1-se-comportando-como-deveria

Minha dica é que sempre mantenha um projeto com o Magento padrão e somente o módulo da MOZG para eventuais testes isolado

### Aoe_Scheduler
### Multiple tasks with the same job code were piling up. Skipping execution of duplicates.

--

O erro menciona "Várias tarefas com o mesmo código de trabalho estavam se acumulando. Ignorando a execução de duplicatas."

Isso pode ocorrer devido o tempo da CRON, tente aumentar para 5 minutos

--

No backend do Magento em:

	Sistema -> List View ->

		Deve ser exibido os serviços processados ou a serem processados pela CRON

			Caso tenha registros, exclua os registros

Via terminal exclua ou renomeie a pasta "var/cache" sob o Magento

Dessa forma na execução da CRON deve ser criado os serviços a ser processado

--

Assunto relativo a configuração de CRON é parte integrante da plataforma Magento, não tendo relação com nossos produtos ou serviço

--

Assunto relativo ao módulo "Aoe_Scheduler" pode ser aberto questionamento junto ao desenvolvedor do módulo em

https://github.com/AOEpeople/Aoe_Scheduler

--

### Sobre o envio do log da ocorrência

Renomeie ou exclua a pasta "var/log", dessa forma novos arquivo de log deve ser reconstruído

Efetue a simulação da ocorrência

Se atente aos arquivos da pasta "var/log", o arquivo "system.log" pode conter avisos ou erros, sempre analise o seu conteúdo e efetue as devidas correções

O arquivo de log do módulo da MOZG é nomeado como "mozg.log"

A presença de arquivos na pasta "var/log/cron" é indicio de erro no módulo, nesse caso envie o log para o desenvolvedor do módulo

Para efeito informativo os logs de erro do Magento é armazenado em "var/report" é sugerido a analise de algum possível arquivo nesse diretório e a exclusão do diretório a fim da pasta "var" ter um melhor controle

## Exception: dl(): Dynamically loaded extensions aren't enabled

Execute o seguinte comando no terminal, para visualizar a existencia da extensão "ionCube PHP Loader" nesse ambiente denominado PHP CLI

    php -v

Caso não seja exibido o termo "with the ionCube PHP Loader", entre em contato com o administrador do seu servidor e solicite que ele aplique o suporte da extensão no ambiente PHP CLI

### PHP Fatal error:  The file app/code/local/Mozg/Rede/Model/Cronjob.php cannot be decoded by this version of the ionCube Loader. If you are the administrator of this site then please install the latest version of the ionCube Loader. in Unknown on line 0

Este erro é exibido na ausencia do "ionCube PHP Loader" no ambiente PHP CLI

Entre em contato com o administrador do sistema e solicite para ativar o suporte da extensão para esse ambiente

### Acima de qual versão do Magento o módulo deve funcionar

Somente acima da versão 1.7.x

O Magento 1.6.x não tem suporte ao recurso denominado grupos de configuração ou seja o uso do atributo ' type="group"'

### Sobre customização
### Como personalizar os arquivos `*.phtml`

Nunca deve ser editado os arquivos nativo do Magento

Nunca deve ser editado os arquivos dos módulos

A customização deve seguir o formato padrão do Magento, que é de sempre aplicar o suporte do novo arquivo a estrutura de diretório do template do projeto

Voce pode ativar o debug do Magento para visualizar a localização do arquivo `*.phtml`

Eu recomendo efetuar personalização editando o arquivo o minimo possivel, pois pode haver alterações no arquivo original que não deve estar presente nessa alteração independente

Minha sugestão é que procure aplicar o suporte utilizando CSS ou JS

<!--
A seguir aplicamos o suporte a um template especifico

    cd magento

    cp -r app/design/frontend/base/default/template/mozg_bradesco/ app/design/frontend/smartwave/porto_child/template
-->

### Mage registry key `_singleton/telencephalon/observer already exists`
### Mage registry key `_singleton/mozg_base/adminhtml_observer already exists`

Para processos de instalação/atualização é necessário manter o Cache e o Compiler desativado

Pode ser necessário apagar as pastas sob o Magento /var/cache e /var/session

Teve um caso que o arquivo observer estava vazio gerando a ocorrência do erro onde foi feito novamente a atualização do módulo

### Ocultando elementos via javascript

Abaixo exemplo que pode ser adicionado em: Sistema -> Configuração -> Geral -> Visual -> Rodape -> Outros Códigos HTML

<!-- :: Sistema -> Configuração -> Geral -> Visual -> Rodape -> Outros Códigos HTML -->

-- Na necessidade de desativar os campos "País" e "Estado" em "/checkout/cart/"

	<script type="text/javascript">
	//<![CDATA[
		if( (window.location.pathname == '/checkout/cart/') )
		{
			console.log('### Ocultando elementos via javascript /checkout/cart/');
			var mozg_Element = document.getElementById("shipping-zip-form");
			if(mozg_Element)
			{
				var mozg_ul_Element = mozg_Element.children[1];
				var mozg_li_Element_0 = mozg_ul_Element.children[0];
				var mozg_li_Element_1 = mozg_ul_Element.children[1];
				mozg_li_Element_0.style.display = "none";
				mozg_li_Element_1.style.display = "none";
			}
		}
	//]]>
	</script>

-- Na necessidade de desativar determinados links de navegação em "/customer/account/"

	<script type="text/javascript">
	//<![CDATA[
		if( (window.location.pathname == '/customer/account/') )
		{
			console.log('### Ocultando elementos via javascript /customer/account/');

			console.log(document.getElementsByClassName('block-content'));

	        if(document.getElementsByClassName('block-content'))
			{
				var mozg_Elements = document.getElementsByClassName('block-content');
				var mozg_Element = mozg_Elements[1];
				var mozg_ul_Element = mozg_Element.children[0];
				var mozg_li_Element_4 = mozg_ul_Element.children[4];
				var mozg_li_Element_5 = mozg_ul_Element.children[5];
				var mozg_li_Element_7 = mozg_ul_Element.children[7];
				var mozg_li_Element_9 = mozg_ul_Element.children[9];
				mozg_li_Element_4.style.display = "none";
				mozg_li_Element_5.style.display = "none";
				mozg_li_Element_7.style.display = "none";
				mozg_li_Element_9.style.display = "none";
			}
		}
	//]]>
	</script>

### Sobre exibição de parcelas para o produto

--

Após a instalação do módulo deve ser criado um atributo de produtos denominado "parcelas"

Em seguida

No Backend do Magento, acesse o menu: Catalog -> Attributes -> Manage Attributes -> pesquise pelo atributo "parcelas" e -> atualize o registro para "Used in Product Listing = Yes", salve o registro em seguida atualize os índices

--

Caso a parcela não esteja visivel no frontend execute a ação acima

--

### Como alterar o status do pedido

Devido o pedido estar com o status como "Revisão de pagamento" o Magento não permite "Cancelar" nessa etapa

Mas com o uso de módulo de terceiros ou desenvolvendo uma rotina você consegue alterar o status do Magento

Sugiro pesquisar na NET por "Magento Change Order"

Exemplos

https://marketplace.magento.com/xtento-advanced-order-status.html

https://amasty.com/order-status.html

### Como aplicar taxa de forma condicional

Provavelmente o seguinte módulo atenderá essa necessidade

https://github.com/yvoronoy/magento-extension-extra-fee

Vemos que o mesmo funciona sobre o recurso "Regras de promoção" nativo do Magento

### Reexecutar os scripts de setup do módulo

Execute o comando a seguir no MySQL para reexecutar os scripts de setup

    -- add table prefix if you have one
    DROP TABLE IF EXISTS mozg_boxpacker_packing_comment_store;
    DROP TABLE IF EXISTS mozg_boxpacker_packing_comment;
    DROP TABLE IF EXISTS mozg_boxpacker_packing_store;
    DROP TABLE IF EXISTS mozg_boxpacker_packing;
    DROP TABLE IF EXISTS mozg_api_debug;
    DROP TABLE IF EXISTS mozg_event_data;
    DROP TABLE IF EXISTS mozg_event_data_queue;
    DROP TABLE IF EXISTS mozg_order_payment;
    SELECT * FROM `core_resource` WHERE `code` like '%mozg%';
    DELETE FROM core_resource WHERE code like '%mozg%';
    SELECT * FROM `core_config_data` WHERE `path` like '%mozg%';
    DELETE FROM core_config_data WHERE path like '%mozg%';

### Como alterar as dimensões de produto(s)
### Como alterar atributo(s) de produto(s)

É nativo do Magento a possibilidade de selecionar registros na grade de dados de produto(s), podendo selecionar a ação de "atualizar atributos", em seguida será exibido a possibilidade de atualizar atributos em lote

### Como resgatar o numero de parcelas

A referência da parcela é armazenada na seguinte hierarquia do Magento

    Order
         Payment
            AdditionalInformation
                number_of_installments

ou

    Order
         Payment
            po_number

### Como resgatar o código da transação do pedido

A referência do pagamento é armazenada na seguinte hierarquia do Magento

    Order
         Payment
            mozg_psp_reference


A seguir temos um exemplo

	$order_id = '1';
	$order = Mage::getModel('sales/order')->load($order_id);
	$payment = $order->getPayment();
	$pspReference = $payment->getData('mozg_psp_reference');

### Onde os atributos de clientes ficam armazenadaos ?

É nativo do Magento que na tabela `eav_attribute` esteja registrado atributos e na tabela `eav_attribute_option_value` os registros para valores do tipo option "select"

    SELECT * FROM `eav_attribute` WHERE `attribute_code` = 'rg';

    SELECT * FROM `customer_eav_attribute` WHERE `attribute_id` = 218;

    SELECT * FROM `customer_entity_varchar` WHERE `attribute_id` = 218;

### Modificando a tradução do módulo para o template

Cada módulo tem o seu arquivo de tradução com a mesma nomenclatura do módulo

Os arquivos de tradução para português do Brasil no Magento é armazenado no diretório  

    /app/locale/pt_BR/

Recomendo não editar os arquivos nesse diretório pois em uma nova atualização de módulo esse arquivo deve ser atualizado com as informações do módulo

Na necessidade de trocar algum item

Edite o arquivo translate.csv presente no diretório do seu template para ser exibido um novo resultado

    /app/design/frontend/default/default/locale/pt_BR/translate.csv

Caso não exista a estrutura "/locale/pt_BR/translate.csv" em seu template apenas crie o arquivo nessa estrutura de diretório

Obs.

No Windows ou Mac sugiro usar o programa UltraEdit para edição do arquivo, dessa forma será mantido a codificação do arquivo em UTF-8

--

Para alterar o alerta relativo ao retorno de erro do Webservice, conforme o modelo a seguir a seguir

"O serviço "04014 - SEDEX" retornou o seguinte erro: "O Valor Declarado nao deve ser menor que R$ 18,50.", selecione outra opção. "

Utilize o seguinte modelo de registro no CSV

"O serviço ""%s"" retornou o seguinte erro: ""%s"", selecione outra opção.","xxxO serviço ""%s"" retornou o seguinte erro: ""%s"", selecione outra opção."

--

Para alterar o alerta relativo ao retorno da biblioteca de embalagem, conforme o modelo a seguir a seguir

"Item • 1 | 339 | Retro Chic Eyeglasses | Dimensões (LxCxA): 3 x 2 x 3 cm | Peso = 1 kg não há embalagem associada a essa modalidade de frete ou embalagem compatível para atender as dimensões / peso desse produto"

Utilize o seguinte modelo de registro no CSV

"mozg_jamef_ERROR_PACKING","Nova mensagem"

--

### Mage_Core_Exception: The requested Payment Method is not available. in /app/Mage.php:603
### ERRO: A forma de pagamento selecionada não está disponível

No frontend, este erro deve estar relacionado ao método de checkout de terceiros, que pode ter relação com determinado método de pagamento, sendo indicado na configuração do método de checkout alterar o método selecionado ou salvar novamente

ou

No backend, na visualização do pedido, esse erro é ocasionado caso o módulo relacionado ao método de pagamento esteja ausente no projeto

em

http://magento.stackexchange.com/questions/24307/the-requested-payment-method-is-not-available-on-order-details-page

vemos  que temos 2 opções:

- usar o módulo relacionado ao método de pagamento
- alterar o relacionamento do método a um módulo via banco de dados

Simulei um exemplo em meu ambiente local, pois não pretendo usar o módulo Cerebrum_Telencephalon e quero usar somente o novo pacote Mozg

Abaixo temos 2 instruções SQL a primeira retorna os métodos, a segunda executa a alteração do relacionamento

	mysql -h 'localhost' -u 'USER' -p 'DATABASE' -e "\
	    SELECT count(*) FROM sales_flat_order_payment WHERE method like '%rm_pagseguro_cc%'; \
	    SELECT entity_id, method FROM sales_flat_order_payment WHERE method like '%rm_pagseguro_cc%'; \
	"

	mysql -h 'localhost' -u 'USER' -p 'DATABASE' -e "\
	    UPDATE sales_flat_order_payment SET method = 'banktransfer' WHERE method like '%rm_pagseguro_cc%'; \
	"

Abaixo temos os ID dos métodos

	# Telencephalon

	cerebrum_americanexpress
	cerebrum_banrisul_banricompras
	cerebrum_bancodobrasil
	cerebrum_bcash
	cerebrum_boleto_bradesco
	cerebrum_boleto_hsbc
	cerebrum_boleto_itau
	cerebrum_boleto_santander_banespa
	cerebrum_boleto_banespa
	cerebrum_boleto_bb
	cerebrum_boleto_bancoob
	cerebrum_banrisul_boleto
	cerebrum_boleto_cef
	cerebrum_boleto_cef_sigcb
	cerebrum_bradesco
	cerebrum_cielo
	cerebrum_meucheckout
	cerebrum_itaushopline
	cerebrum_mercadopago
	cerebrum_moip
	cerebrum_pagseguro
	cerebrum_pagador
	cerebrum_redecard

	# Mozg

	mozg_bancodobrasil_comercioeletronico_bb
	mozg_bancodobrasil_comercioeletronico_boleto
	mozg_bancodobrasil_comercioeletronico_eletronictransfer
	mozg_braspag_api_cc
	mozg_braspag_api_dc
	mozg_braspag_api_boleto
	mozg_braspag_api_eletronictransfer
	mozg_cielo_api_cc
	mozg_cielo_api_dc
	mozg_cielo_api_boleto
	mozg_cielo_api_eletronictransfer
	mozg_cielo_checkout_hpp
	mozg_bradesco_shopfacil_boleto
	mozg_bradesco_shopfacil_eletronictransfer
	mozg_redecard_komerci_cc
	mozg_itau_shopline_bankline
	mozg_itau_shopline_boleto
	mozg_pagseguro_api_lightbox
	mozg_pagseguro_api_padrao
	mozg_pagseguro_api_cc
	mozg_pagseguro_api_boleto
	mozg_pagseguro_api_eletronictransfer

### Sobre checkout(s)

Sugiro usar o checkout nativo do Magento

ou

Usar o seguinte checkout de compra em 1 passo

https://github.com/mozgbrasil/magento-iwd-opc#iwdopc

### Sobre valor da parcela invalida, devido a aplicação de desconto em um método anteriormente selecionado

-

Gostaria de compartilhar a seguinte ocorrência

A reprodução consiste no seguinte passo

-

1.

1.1

Criar uma promoção que aplica desconto a algum método de pagamento, pode ser no método "Cash On Delivery"

1.2

No checkout nativo, prosseguir e selecionar o método que tenha o desconto

Ao retornar selecione o método da PagSeguro

Veja que o valor da parcela está errada, sendo usado como base o valor com desconto relativo ao método anterior

1.3

Atualize a pagina

1.4

Em seguida selecione o método da PagSeguro

1.5

Veja que o valor da parcela está errada, sendo usado como base o valor com desconto relativo ao método anterior

-

Ao utilizar o módulo checkout "IWD_Opc", o processo funcionou como esperado, não gerando as ocorrência acima

-

### Sobre a exibição da taxa da parcela na revisão do pedido

Vemos que esse recurso funciona no checkout nativo

Abaixo temos ocorrências de módulos de terceiros

- No uso do módulo "IWD_Opc"

Funciona como esperado, onde ao efetuar qualquer alteração no método de pagamento é feito a atualização da revisão do pedido demonstrando a adição da taxa

- No uso do módulo "Inovarti_Onestepcheckout"

Ao alterar qualquer informação do método de pagamento não é feito a atualização da revisão do pedido

- No uso do módulo "MOIP_Onestepcheckout"

Ao alterar qualquer informação do método de pagamento não é feito a atualização da revisão do pedido

### Sobre o módulo "Inovarti_Onestepcheckout 2.0.3" - "One Step Checkout Brasil 6 Pro"

Disponibibilizado em https://github.com/deivisonarthur/OSC-Magento-Brasil-6-Pro

### Sobre o módulo "Ideasa_IdeCheckoutvm 1.8.0" - "Checkout Venda Mais"

Disponibibilizado em http://www.ipagare.com/

Conforme imagem

Veja que o módulo não deve funcionar corretamente quando ativado mais de 1 método de pagamento que tenha formulário como é o caso dos métodos de cartão de crédito ou débito, veja que o módulo ao invés de enviar somente os parâmetros do formulário relativo ao método de pagamento selecionado está sendo enviado todos os parâmetros de todos os formulários

https://drive.google.com/open?id=1qwNiJlS8JOz3s2JIYEOOLCDZZln3-188

https://drive.google.com/open?id=1PaBK_AdRTSzR_gYl7iTMy_AyaPYoTtAP

### Sobre o módulo "MOIP_Onestepcheckout"

Disponibibilizado em https://github.com/elisei/moip-transparente-magento

### Sobre a janela DHTML http://prototype-window.xilinus.com/

Foi detectado que no GoogleChrome não é exibido o Scroll da janela DHTML nativa do Magento, por isso do uso do Popup

### Sobre as colunas "ID do Método de Pagamento" e "Status da Transacão"
### Como exibir as colunas "ID do Método de Pagamento" e "Status da Transacão"

[![Clique para visualizar o vídeo](https://img.youtube.com/vi/FO7X3lvqLrQ/0.jpg)](https://youtu.be/FO7X3lvqLrQ "Clique para visualizar o vídeo")

Essas colunas foram adicionadas para uso interno do programador da MOZG para analise dos ids dos métodos de pagamento e entrega, se tratando de recurso experimental,

Para desativar o recurso, acesse, MOZG -> Geral -> Exibir novas colunas na grade de pedidos -> defina como "Não"

O conteúdo dessas colunas devem ser exibida caso exista registro que o módulo "husseycoding_customordergrid" esteja ativado

O módulo "husseycoding_customordergrid" permite adicionar colunas na grade de dados de pedidos

Como o módulo não exibe o ID do método de pagamento, o módulo da MOZG está adicionado essa nova coluna estendendo a funcionalidade do módulo "husseycoding_customordergrid"

É possível efetuar pesquisa na nova coluna "ID do Método de Pagamento"

Na grade de dados de pedidos foi colocado condição que ao pesquisar na coluna "ID do Método de Pagamento" pelos seguintes identificadores: "mozg_cielo" ou "mozg_braspag" é exibido na coluna "Status da Transacão" o status da transação de cada pedido na grade de dados

É recomendado a instalação do módulo via composer executando o seguinte comando no terminal

    composer require husseycoding/customordergrid

Abaixo temos as URLs relativa ao repositório do módulo e o vídeo demonstrativo

https://github.com/husseycoding/customordergrid

https://www.youtube.com/watch?v=dxIUntG6M2A

--

Fui reportado de ocorrência de erro no uso do módulo "husseycoding/customordergrid"

	PHP Fatal error: Call to a member function addData() on boolean in /app/code/community/HusseyCoding/CustomOrderGrid/Model/Observer.php on line 49

--

Assuntos relativo a módulos de terceiros, sugiro entrar em contato com o desenvolvedor do módulo

--

Vemos no repositório desse módulo um caso reportado recentemente em "01/09" sobre esse erro que mencionado

https://github.com/husseycoding/customordergrid/issues/14

Onde o desenvolvedor informa que deve analisar em uma próxima versão

--

Por se tratar de módulo Open-Source, qualquer programador pode aplicar uma possível correção e até contribuir para a melhoria desse módulo

--

### Como remover arquivos do projeto

A seguir é efetuado pesquisa nos diretórios pelas nomenclaturas

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type d -name 'Mozg*'

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type d -name 'mozg*'

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type l -name 'Mozg*'

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type l -name 'mozg*'

Como vemos que são retornado somente as pastas vinculada a MOZG, podemos excluir os diretório

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type d -name 'Mozg*' | xargs rm -rf

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type d -name 'mozg*' | xargs rm -rf

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type l -name 'Mozg*' | xargs rm -rf

	find /home/marcio/dados/public_html/application-dev39/FLOX/flox_public_html/ -type l -name 'mozg*' | xargs rm -rf

Execute a primeira instrução somente para efeito de conferencia

Em seguida exclua a pasta vendor na raiz do projeto e se necessário atualize os requerimentos do Composer

## No modo "Personalizado" escolhendo as seções desejadas para não permitir acesso, apresenta sempre "Acesso Negado"

Na editação do nível de acesso em permissões de acesso

Deve ser selecionado o nó "configuração" em "sistema"

## Porque não está sendo exibido o pedido em /sales/order/history/

O pedido com o status "pagamento pendente" não deve ser exibido nesse ambiente

É exibido os pedidos com os status a seguir

[✓] new  
[x] pending_payment  
[✓] processing  
[✓] complete  
[✓] closed  
[✓] canceled  
[✓] holded  
[✓] payment_review  

## Estatística

Pacote | Downloads Total | Downloads Mensal | Downloads Diário
--- | --- | --- | ---
[IWD_Opc](https://packagist.org/packages/mozgbrasil/magento-iwd-opc/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-iwd-opc/downloads)](https://packagist.org/packages/mozgbrasil/magento-iwd-opc) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-iwd-opc/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-iwd-opc)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-iwd-opc/d/daily)](https://packagist.org/packages/mozgbrasil/magento-iwd-opc)
[Regiões Brasil](https://packagist.org/packages/mozgbrasil/magento-brasil-regions/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-brasil-regions/downloads)](https://packagist.org/packages/mozgbrasil/magento-brasil-regions) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-brasil-regions/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-brasil-regions)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-brasil-regions/d/daily)](https://packagist.org/packages/mozgbrasil/magento-brasil-regions)
[Tradução Brasil](https://packagist.org/packages/mozgbrasil/magento-locale-pt_br/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-locale-pt_br/downloads)](https://packagist.org/packages/mozgbrasil/magento-locale-pt_br) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-locale-pt_br/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-locale-pt_br)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-locale-pt_br/d/daily)](https://packagist.org/packages/mozgbrasil/magento-locale-pt_br)
[Framework](https://packagist.org/packages/mozgbrasil/php-framework-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/php-framework-php_71/downloads)](https://packagist.org/packages/mozgbrasil/php-framework-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/php-framework-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/php-framework-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/php-framework-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/php-framework-php_71)
[Base](https://packagist.org/packages/mozgbrasil/magento-base-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-base-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-base-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-base-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-base-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[Correios](https://packagist.org/packages/mozgbrasil/magento-correios-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-correios-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-correios-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-correios-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-correios-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-correios-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-correios-php_71)
[Cielo](https://packagist.org/packages/mozgbrasil/magento-cielo-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-cielo-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-cielo-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-cielo-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-cielo-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-cielo-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-cielo-php_71)
[Clientes](https://packagist.org/packages/mozgbrasil/magento-customer-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-customer-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-customer-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-customer-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-customer-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-customer-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-customer-php_71)
[Redecard](https://packagist.org/packages/mozgbrasil/magento-redecard-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-redecard-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-redecard-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-redecard-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-redecard-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-redecard-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-redecard-php_71)
[Itaú](https://packagist.org/packages/mozgbrasil/magento-itau-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-itau-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-itau-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-itau-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-itau-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-itau-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-itau-php_71)
[Braspag](https://packagist.org/packages/mozgbrasil/magento-braspag-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-braspag-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-braspag-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-braspag-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-braspag-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-braspag-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-braspag-php_71)
[PagSeguro](https://packagist.org/packages/mozgbrasil/magento-pagseguro-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-pagseguro-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-pagseguro-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-pagseguro-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-pagseguro-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-pagseguro-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-pagseguro-php_71)
[Clearsale](https://packagist.org/packages/mozgbrasil/magento-clearsale-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-clearsale-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-clearsale-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-clearsale-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-clearsale-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-clearsale-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-clearsale-php_71)
[Banco do Brasil](https://packagist.org/packages/mozgbrasil/magento-bancodobrasil-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-bancodobrasil-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-bancodobrasil-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-bancodobrasil-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-bancodobrasil-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-bancodobrasil-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-bancodobrasil-php_71)
[Bradesco](https://packagist.org/packages/mozgbrasil/magento-bradesco-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-bradesco-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-bradesco-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-bradesco-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-bradesco-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-bradesco-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-bradesco-php_71)
[Jadlog](https://packagist.org/packages/mozgbrasil/magento-jadlog-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-jadlog-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-jadlog-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-jadlog-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-jadlog-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-jadlog-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-jadlog-php_71)
[Jamef](https://packagist.org/packages/mozgbrasil/magento-jamef-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-jamef-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-jamef-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-jamef-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-jamef-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-jamef-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-jamef-php_71)
[Loggi](https://packagist.org/packages/mozgbrasil/magento-loggi-php_71/stats) | [![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-loggi-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-loggi-php_71) | [![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-loggi-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-loggi-php_71)| [![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-loggi-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-loggi-php_71)

## Contribuintes

Equipe Mozg

## License

[Comercial License](LICENSE.txt)

## Badges

[![Join the chat at https://gitter.im/mozgbrasil](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mozgbrasil/)
[![Latest Stable Version](https://poser.pugx.org/mozgbrasil/magento-base-php_71/v/stable)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-base-php_71/downloads)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[![Latest Unstable Version](https://poser.pugx.org/mozgbrasil/magento-base-php_71/v/unstable)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[![License](https://poser.pugx.org/mozgbrasil/magento-base-php_71/license)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-base-php_71/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-base-php_71/d/daily)](https://packagist.org/packages/mozgbrasil/magento-base-php_71)
[![Reference Status](https://www.versioneye.com/php/mozgbrasil:magento-base-php_71/reference_badge.svg?style=flat-square)](https://www.versioneye.com/php/mozgbrasil:magento-base-php_71/references)
[![Dependency Status](https://www.versioneye.com/php/mozgbrasil:magento-base-php_71/1.0.0/badge?style=flat-square)](https://www.versioneye.com/php/mozgbrasil:magento-base-php_71/1.0.0)

:cat2:

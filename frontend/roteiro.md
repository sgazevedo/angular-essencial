# Angular
Um framework JavaScript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes.

## TypeScript
Linguagem criada pela Microsoft. É um Superset do JavaScript, tem tudo que o JavaScript tem e acrescenta uma série de funcionalidades. Uma das mais fortes funcionalidades acrescentadas é a Tipagem forte (pode se definir tipos associados a variáveis), além de orientação a objetos, decorator, interface, entre outros recursos.
O código escrito em TypeScript é compilado para JavaScript, pois o browser não conhece a sintaxe do TypeScript.

## Inicialização da APP
O main.ts é o primeiro arquivo a ser chamado na aplicação Angular.
Na sequencia, é chamado o module da aplicação (AppModule), que será responsável por inicializar a aplicação. A aplicação Angular será organizada em uma árvore de componentes, e os componentes são organizados dentro de módulos, ou seja, a aplicação é modularizada. Sendo assim, alguns componentes estarão visíveis para somente determinados módulos, trazendo maior nível de encapsulamento. 
Dentro do AppModule, terá um atributo chamado Bootstrap, responsável por inicialização. Esse Bootstrap apontará para AppComponent, que é o componente criado por padrão, e a partir desse AppComponent, toda a árvore de componentes será chamada. 

## O que é um Componente?
Esse conceito é encontrado em vários frameworks (React.js, Vue.js, Angular).
O compomente é um pedaço da sua aplicação, um trecho de código que representa um componente visual da sua tela. Esse componente visual terá uma estrutura (HTML), um estilo (CSS) e um comportamento (arquivo TS). Via de regra, você terá pelo menos 3 arquivos em um componenete. Ex.: home.component.css, home.component.html e home.component.ts
Quando você cria um componenete, é gerado uma tag personalizada. Ex.: <app-home></app-home>. Essa é forma para referencia todo o código HTML que foi criado dentro desse componente, todo o estilo e toda a lógica colocada dentro do TS, ou seja, a ideia é encapsular dentro desse componente.
A partir do arquivo TS, o angular encontrará as referências tanto do arquivo HTML quanto do CSS.

## Organização Usando Módulos
No Angular há a organização tanto para componente, como para módulos. Ou seja, todos os componentes estarão dentro de algum módulo.
Quando você cria um componente dentro do módulo, você tem a escolha de definir se aquele componente ficará visível para fora do módulo ou ficará visível apenas dentro do módulo.
Terão 5 atributos dentro de um módulo, usado para configurar o módulo:
- Declarations: são declarados "Components", "Diretivas" e "Pipes". Será especialmente utilizado para declarar os componentes que fazem parte daquele módulo.
- Exports: Todos os componentes, diretivas e pipes que ficarão visíveis para fora do módulo são colocados dentro de Exports. Pode ser tudo o que foi colocado em declarations, como pode ser uma parte do que foi declarado dentro do módulo. 
- Imports: em imports são importados outros módulos. Um módulo pode depender de um outro módulo da própria aplicação, ou de um módulo externo.
- Providers: nos providers são declarados os services.
- Bootstrap: é definido o componente que será carregado naquele módulo. É necessário apenas para o módulo inicial da aplicação: dentro do AppModulo, que é carregado inicialmente, terá esse atributo Bootstrap que fará com que o componente principal seja carregado e esteja disponivel para ser usado na SPA.

Exemplo de Aplicação:
- AppModule
	- Bootstrap
	- Declarations
	- Imports
- XModule
	- Declarations
	- Imports
	- Exports
	- Providers
- YModule
	- Declarations
	- Imports
	- Exports
	- Providers
- ZModule
	- Declarations
	- Imports
	- Exports
	- Providers

## Mão na massa!

npm i -g @angular/cli
Instala o Command Line Interface (CLI), interface de linha de comando do Angular. É instalado uma dependência do Node, que criará no nosso terminal um comando que é o "ng", e a partir disso é possível criar projeto, componentes módulos

ng new frontend --minimal
Criará um novo projeto dentro de uma pasta "frontend". A flag "--minimal" irá tirar alguns arquivos que são gerados automaticamente, como testes.

Ao rodar o comando, fará algumas perguntas:
- Would you like to add Angular routing? Sim
- Which stylesheet format would you like to use? CSS

Para iniciar o projeto, acessar a pasta onde foi criado o projeto e executar "npm start".

## Conhecendo arquivos do projeto

angular.json
Propriedade projects > frontend > schematics > @schematics/angular:component > inline template = false
Propriedade projects > frontend > schematics > @schematics/angular:component > inline style = false

Quando está definido inline template e inline style como "true", vai criar 1 único arquivo e arquivos CSS e HTML serão criados dentro do TS. O ideal é ter os 3 arquivos separados. Quando na criação do projeto é adicionada a tag --minimal, essas propriedades inline são setadas dessa forma, mas o padrão é false. 

app/app.component.ts
Com a tag minimal, foi gerado HTML e CSS inline. 
Criar arquivos HTML e CSS, remover template e o style gerado e adicionar apontamento para arquivos a serem criados.

## Instalar os Componentes do Material
Instalar a dependência do material design, seguinte comando:
ng add @angular/material

Tem uma série de componentes interessantes dentro do material que vai nos ajudar a construir a aplicação seguindo esse padrão de layout desenvolvido pelo Google.
Será feitas algumas perguntas:
- Choose a prebuilt theme name, or "custom" for a custom theme >  dá para selecionar o link de cada opção, colar no navegador e visualizar o tema.
- Set up global Angular Material typography styles? Sim
- Include the Angular animations module? Include an enable

## Componente Header

ng generate component components/template/header
ou 
ng g c components/template/header

Comando para gerar componente

No app.component.html, adicionar a tag <app-header></app-header>

no app.module.ts, adicionar o import de:
MatToolbarModule from '@angular/material/toolbar'.
Adicionar esse Module importado em imports.

## Componente Footer
ng g c components/template/footer

## Componente Nav (navegação)
ng g c components/template/nav

Em app.module, importar seguintes modules:
MatSidenavModule from '@angular/material/sidenav';
MatListModule from '@angular/material/list';

Material Icons:
https://materialui.co/icons

## Componente Home
Comando a executar:
```
ng g c views/home
```

Em app.module, importar seguintes modules:
MatCardModule from '@angular/material/card';

## Navegando entre Componentes
Comando a executar:
ng g c views/product-crud

No arquivo app-routing.module.ts é necessário adicionar as rotas, para navegar entre as páginas Início e Produtos.

## Componente Criar Produto
Executar o comando:
```
ng g c components/product/product-create
```

Necessário adicionar nas rotas

## Binding

Event Binding:
Para chamar um método de um arquivo TS, no HTML colocar o atributo click do button entre parênteses: 
```
<button (click)="fazerAlgo()">
```

Binding de atributos:
Para atribuir o valor de uma propriedade de uma classe em TS em um HTML, colocar o atributo entre colchetes: 
```
<p [id]="atributoLegal">
```

## Service
Quando você cria um componente, o objetivo é que ele tenha menos responsabilidades possíveis, focando responsabilidades apenas relacionadas à exibição do componente. O componente tem sua lógica em um arquivo TS, tem a parte de estilo e tem a estrutura no HTML, então será melhor que o componente esteja focado apenas na parte da visualização.

Se você precisar que um componente acesse backend, precise lidar com chamadas HTTP, que precise implementar regras e lógicas, o ideal é separar isso dentro de um service. O Angular não força, mas isso é uma boa prática.

Comando a ser executado para criar service:

```
ng g s components/product/product
```

Caso seja um service a ser exposto, para ser utilizado por outros componentes, necessário declarar ele no arquivo app.module.ts em providers.

Ao criar um service, no arquivo TS gerado haverá o decorator "@Injectable". Isso quer dizer que essa classe pode ser injetada em outras classes. Dessa forma, nas outras classes component, é só injetar dependência desse service no construtor da classe destino.
Quando definido a que o service é provido a partir do root (atributo "provideIn: 'root'"), ou seja, no nível da aplicação, significa que esse service é um singleton: a classe terá apenas uma única instância, não sendo sempre instanciada novamente quando chamada.

## Criando HTTP

Importar o client HTTP: { HttpClientModule } from '@angular/common/http'

Necessário injetar dependência do HttpClient nos services.

Necessário nos métodos crud definir o retorno de Observable. 
Ex: 
~~~
create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }
~~~

Observáveis fornecem suporte para passagem de mensagens entre partes do seu aplicativo. Eles são usados frequentemente em Angular e são uma técnica para manipulação de eventos, programação assíncrona e manipulação de múltiplos valores.

Quando você define, por exemplo, um Observable de produto, eu espero receber como resposta o produto que eu acabei de inserir. Com o Observable, não terá a resposta de imediato, vai retornar o que é observável quando a resposta acontece. O Observer Pattern é um padrão baseado em evento, ou seja, o Event Based Pattern, ou seja, quando acontecer um evento um determinado código é chamado de forma reativa. Nesse caso, o evento é quando a requisição retornar, quando a resposta chegar, já que estou fazendo a requisição, submetendo a requisição para o backend, nada mais natural do que quando a resposta chegar, esse evento chame a função que eu vou passar.

### Formulários Create

Importar em app.module.ts:
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

Após isso, adicionar no create.component.html <form> e <mat-form-field>, adicionando fields para cada propriedade do model.

### Componente Obter

Criar novo componente:

~~~
ng g c components/product/product-read
~~~

No product-crud.component.html, adicionar referência:

~~~
<app-product-read>
~~~

### Exibindo produtos com *NGFOR

Utilizar *ngFor para exibir conteúdo do array, conforme abaixo:

~~~
<tr *ngFor="let product of products">
	<td>{{ product.id }}</td>
	<td>{{ product.name }}</td>
	<td>{{ product.price }}</td>
</tr>
~~~~

### Gerando componente Tabela

Link: https://material.angular.io/guide/schematics

Comando: 
~~~
ng generate @angular/material:<schematics name> <component-name>
~~~

Para gerar table:
~~~
ng generate @angular/material:table components/product/product-read2
~~~

### Formatar valor moeda e/ou casas decimais

Para formatar os valores de moeda para PT-BR e casas decimais separados por vírgula, realizar os procedimentos abaixo.

No formulário, para os campos currency, adicionar notação abaixo:
~~~
<td mat-cell *matCellDef="let row">{{row.price | currency: 'BRL'}}</td>
~~~

No app.module.ts, importar { LOCALE_ID } from '@angular/core', e adicionar para providers:

~~~
{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
}
~~~

Além disso, realizar as importações abaixo:
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

E adicionar a seguinte chamada (abaixo dos imports:
registerLocaleData(localePt);


'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend-service documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-d2ff5f42886e20cb3226261974e9310499d9be784795dc01cb87d079e152627cb7961ee9767ed7ee1080e8c6a8c0ecefab29e35d9d8a1cfb90fd67e87a115ad4"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-d2ff5f42886e20cb3226261974e9310499d9be784795dc01cb87d079e152627cb7961ee9767ed7ee1080e8c6a8c0ecefab29e35d9d8a1cfb90fd67e87a115ad4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-d2ff5f42886e20cb3226261974e9310499d9be784795dc01cb87d079e152627cb7961ee9767ed7ee1080e8c6a8c0ecefab29e35d9d8a1cfb90fd67e87a115ad4"' :
                                        'id="xs-injectables-links-module-DatabaseModule-d2ff5f42886e20cb3226261974e9310499d9be784795dc01cb87d079e152627cb7961ee9767ed7ee1080e8c6a8c0ecefab29e35d9d8a1cfb90fd67e87a115ad4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HttpModule.html" data-type="entity-link" >HttpModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatientModule.html" data-type="entity-link" >PatientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' : 'data-bs-target="#xs-controllers-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' :
                                            'id="xs-controllers-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' }>
                                            <li class="link">
                                                <a href="controllers/CreatePatientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' : 'data-bs-target="#xs-injectables-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' :
                                        'id="xs-injectables-links-module-PatientModule-d9240f5eda0a77fb2cd58096ddbbb469d93f0613d895ea07f0c364687b46fc48dedfdfad32483fb5ba4706ed4ff0223ebfdf20852288b3ee297297d9abe9581f"' }>
                                        <li class="link">
                                            <a href="injectables/CreatePatientUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AggregateRoot.html" data-type="entity-link" >AggregateRoot</a>
                            </li>
                            <li class="link">
                                <a href="classes/DomainEvents.html" data-type="entity-link" >DomainEvents</a>
                            </li>
                            <li class="link">
                                <a href="classes/Entity.html" data-type="entity-link" >Entity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Left.html" data-type="entity-link" >Left</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotAllowedError.html" data-type="entity-link" >NotAllowedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientAbstractRepository.html" data-type="entity-link" >PatientAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientConcreteRepository.html" data-type="entity-link" >PatientConcreteRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDataStructureMapper.html" data-type="entity-link" >PatientDataStructureMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientEntity.html" data-type="entity-link" >PatientEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceNotFoundError.html" data-type="entity-link" >ResourceNotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Right.html" data-type="entity-link" >Right</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueEntityID.html" data-type="entity-link" >UniqueEntityID</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAlreadyExistsErrorMessage.html" data-type="entity-link" >UserAlreadyExistsErrorMessage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CreatePatientUseCase.html" data-type="entity-link" >CreatePatientUseCase</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CreatePatientUseCaseRequest.html" data-type="entity-link" >CreatePatientUseCaseRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DomainEvent.html" data-type="entity-link" >DomainEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EventHandler.html" data-type="entity-link" >EventHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PatientProps.html" data-type="entity-link" >PatientProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseCaseError.html" data-type="entity-link" >UseCaseError</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
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
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-059775472d2b0a6e7cac47adbcc94b8b7a4f71067e54b2eb89a4b83f91b3d5b22f5dbc98393b8be1b4427b7bb3af2b71a94e0bd69fd8b8846962ac3f14708d25"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-059775472d2b0a6e7cac47adbcc94b8b7a4f71067e54b2eb89a4b83f91b3d5b22f5dbc98393b8be1b4427b7bb3af2b71a94e0bd69fd8b8846962ac3f14708d25"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-059775472d2b0a6e7cac47adbcc94b8b7a4f71067e54b2eb89a4b83f91b3d5b22f5dbc98393b8be1b4427b7bb3af2b71a94e0bd69fd8b8846962ac3f14708d25"' :
                                        'id="xs-injectables-links-module-DatabaseModule-059775472d2b0a6e7cac47adbcc94b8b7a4f71067e54b2eb89a4b83f91b3d5b22f5dbc98393b8be1b4427b7bb3af2b71a94e0bd69fd8b8846962ac3f14708d25"' }>
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
                                            'data-bs-target="#controllers-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' : 'data-bs-target="#xs-controllers-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' :
                                            'id="xs-controllers-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' }>
                                            <li class="link">
                                                <a href="controllers/CreatePatientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DeletePatientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeletePatientController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ListAllPatientsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAllPatientsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ListPatientByEmailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPatientByEmailController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ListPatientByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPatientByIdController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UpdatePatientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePatientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' : 'data-bs-target="#xs-injectables-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' :
                                        'id="xs-injectables-links-module-PatientModule-b1e7176c3c651046b73a733eeb616940e32b64b54f9539fc500367f4ba241f9eecf5db24b11f257cc33f547c60229ac281bcb10c9bb9aa08c01aac0f33cc0f06"' }>
                                        <li class="link">
                                            <a href="injectables/CreatePatientConcreteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientConcreteRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreatePatientUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeletePatientUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeletePatientUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListAllPatientsUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAllPatientsUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListPatientByEmailUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPatientByEmailUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListPatientByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPatientByIdUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListPatientsConcreteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPatientsConcreteRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateAndDeleteConcreteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateAndDeleteConcreteRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdatePatientUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePatientUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' : 'data-bs-target="#xs-controllers-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' :
                                            'id="xs-controllers-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' }>
                                            <li class="link">
                                                <a href="controllers/CreateUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DeleteUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ListAllUsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAllUsersController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ListUserByEmailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserByEmailController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ListUserByIdController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserByIdController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' : 'data-bs-target="#xs-injectables-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' :
                                        'id="xs-injectables-links-module-UserModule-0673138d572722c02d5c2b0120cbede4e41f7ed931e8ec479eac998efed84291876800ed9500d7a72dee911030cfc6d2459279b326726d25d9faa68dcac0badd"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserConcreteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserConcreteRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListAllUsersUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAllUsersUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListUserByEmailUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserByEmailUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListUserByIdUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserByIdUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListUserConcreteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserConcreteRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateAndDeleteConcreteRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateAndDeleteConcreteRepository</a>
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
                                <a href="classes/CreatePatientAbstractRepository.html" data-type="entity-link" >CreatePatientAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserAbstractRepository.html" data-type="entity-link" >CreateUserAbstractRepository</a>
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
                                <a href="classes/ListPatientAbstractRepository.html" data-type="entity-link" >ListPatientAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListUserAbstractRepository.html" data-type="entity-link" >ListUserAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotAllowedError.html" data-type="entity-link" >NotAllowedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientAlreadyExistsError.html" data-type="entity-link" >PatientAlreadyExistsError</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDataStructureMapper.html" data-type="entity-link" >PatientDataStructureMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientEntity.html" data-type="entity-link" >PatientEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientPresenter.html" data-type="entity-link" >PatientPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientsNotFound.html" data-type="entity-link" >PatientsNotFound</a>
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
                                <a href="classes/UpdateAndDeleteAbstractRepository.html" data-type="entity-link" >UpdateAndDeleteAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAndDeleteUserAbstractRepository.html" data-type="entity-link" >UpdateAndDeleteUserAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAlreadyExistsError.html" data-type="entity-link" >UserAlreadyExistsError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDataStructureMapper.html" data-type="entity-link" >UserDataStructureMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPresenter.html" data-type="entity-link" >UserPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersNotFound.html" data-type="entity-link" >UsersNotFound</a>
                            </li>
                            <li class="link">
                                <a href="classes/ZodPipeValidator.html" data-type="entity-link" >ZodPipeValidator</a>
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
                                    <a href="injectables/CreatePatientConcreteRepository.html" data-type="entity-link" >CreatePatientConcreteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatePatientUseCase.html" data-type="entity-link" >CreatePatientUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserConcreteRepository.html" data-type="entity-link" >CreateUserConcreteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserUseCase.html" data-type="entity-link" >CreateUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeletePatientUseCase.html" data-type="entity-link" >DeletePatientUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteUserUseCase.html" data-type="entity-link" >DeleteUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListAllPatientsUseCase.html" data-type="entity-link" >ListAllPatientsUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListAllUsersUseCase.html" data-type="entity-link" >ListAllUsersUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListPatientByEmailUseCase.html" data-type="entity-link" >ListPatientByEmailUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListPatientByIdUseCase.html" data-type="entity-link" >ListPatientByIdUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListPatientsConcreteRepository.html" data-type="entity-link" >ListPatientsConcreteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListUserByEmailUseCase.html" data-type="entity-link" >ListUserByEmailUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListUserByIdUseCase.html" data-type="entity-link" >ListUserByIdUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListUserConcreteRepository.html" data-type="entity-link" >ListUserConcreteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateAndDeleteConcreteRepository.html" data-type="entity-link" >UpdateAndDeleteConcreteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateAndDeleteUserConcreteRepository.html" data-type="entity-link" >UpdateAndDeleteUserConcreteRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdatePatientUseCase.html" data-type="entity-link" >UpdatePatientUseCase</a>
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
                                <a href="interfaces/CreateUserUseCaseRequest.html" data-type="entity-link" >CreateUserUseCaseRequest</a>
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
                                <a href="interfaces/UpdatePatientEntity.html" data-type="entity-link" >UpdatePatientEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePatientUseCaseRequest.html" data-type="entity-link" >UpdatePatientUseCaseRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateUserEntity.html" data-type="entity-link" >UpdateUserEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseCaseError.html" data-type="entity-link" >UseCaseError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserProps.html" data-type="entity-link" >UserProps</a>
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
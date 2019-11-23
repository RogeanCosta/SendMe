import React, { Fragment } from "react";
import './avatar.css'
import avatar from "./imagem-avatar.jpg"


export default () => (
    <Fragment>
        <div class="container">
          <div class="row profile">
		        <div class="col-md">
			        <div class="profile">
                {/*} SIDEBAR USERPIC */}
                <div class="profile-userpic">
                  <img src="./imagem-avatar.jpg" class="img-responsive" alt="" />
				        </div>
                {/* END SIDEBAR USERPIC */}
                {/* SIDEBAR USER TITLE */}
				        <div class="profile-usertitle">
					        <div class="profile-usertitle-name">
						        Nome do cliente <span class="fa fa-envelope small pull-right"> </span>
					        </div>
					        <div class="profile-usertitle-job">
                    Email
                  </div>
				        </div>
                {/* END SIDEBAR USER TITLE */}
                {/* SIDEBAR MENU */}
                <div class="profile-usermenu">
                  <ul class="nav">
                    <li >
                      <a href="#">
                      <i class="glyphicon"></i>
                      Minha conta </a>
                    </li>
                    <li>
                      <a href="#">
                      <i class="glyphicon"></i>
                      Meus pedidos </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                      <i class="glyphicon"></i>
                      Sair </a>
                    </li>
                  </ul>
                </div>
				        {/* END MENU */}
			        </div>
		        </div>
	        </div>
        </div>
    </Fragment>
);

import React from 'react'
import './Login.css'

export default () => (
    <div>
        <button id="entrar">Entrar</button>
        <form>
            <div class="form-group">
                <label for="InputEmail">Email </label>
                <input type="email"  class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">Digite o seu e-mail que foi cadastrado</small>
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <br></br>
            <input type="password"  class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
        </form>


    </div>

);


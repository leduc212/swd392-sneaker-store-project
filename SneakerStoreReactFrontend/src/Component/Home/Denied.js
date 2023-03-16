import React from 'react'

export default function Denied() {
  return (
    <div>
        <div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!
                </h1>
                <h2>
                    Access Denied
                </h2>
                <div class="error-details">
                    The page you're trying to access has restricted access. Please refer to your system administrator.
                </div>
                <div class="error-actions">
                    <a href='/' class="btn btn-primary btn-lg">
                        <span class="glyphicon glyphicon-home"></span>
                        Take Me Home
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

import React from 'react'

export default function Error() {
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
                    404 Not Found
                </h2>
                <div class="error-details">
                    No such page exists at this location.
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

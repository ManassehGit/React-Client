import React from 'react'

const ConfigPubSub = () => {
  return (
    <div className='container m-4'>
        <form>
            <div class="form-group row">
                <label for="pubsub" class="col-sm-2 col-form-label">pubsub</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="pubsub" placeholder="pubsub" />
                </div>
            </div>
            <div class="form-group row mt-2">
                <label for="other" class="col-sm-2 col-form-label">Other</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="other" placeholder="Other" />
                </div>
            </div>
        </form>
        </div>
  )
}

export default ConfigPubSub
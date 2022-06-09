import { FaSearch } from 'react-icons/fa'
import React from 'react'

export default function GlobalSearch({
  classes,
  dropdownPosition,
}: {
  classes?: string
  dropdownPosition?: string
}) {
  return (
    <div className={classes}>
      <div className={'dropdown ' + dropdownPosition}>
        <button className="btn btn-square rounded-none cursor-pointer ">
          <FaSearch />
        </button>

        <input
          type="text"
          placeholder="Search..."
          style={{ width: '295px' }}
          className="input input-bordered text-lg menu dropdown-content rounded-none py-2 bg-white w-60"
        />
      </div>
    </div>
  )
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\Admin\Admin\UpdateRequest;

class AdminController extends Controller
{
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin $admin
     * @return \Inertia\Inertia
     */
    public function edit()
    {
        $admin = Auth::user();
        return Inertia::render('Admin/Edit', [
            'admin' => [
                'id' => $admin->id,
                'first_name' => $admin->first_name,
                'last_name' => $admin->last_name,
                'email' => $admin->email,
            ],
        ]);
    }

     /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\Admin\Admin\UpdateRequest  $request
     * @param \App\Models\Admin $admin
     * @return \Illuminate\Support\Facades\Redirect
     */
    public function update(UpdateRequest $request, Admin $admin)
    {
        $admin->update($request->only('first_name', 'last_name', 'email'));

        if($request->password) {
            $admin->update(['password' => bcrypt($request->password)]);
        }

        return Redirect::back()->with('success', __('messages.success.admin.admin.updated'));
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Resources\AccountCollection;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Accounts/Index', [
            'accounts' => new AccountCollection(
                Account::orderBy('id', 'desc')->paginate()->appends($request->all())
            )
        ]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Accounts/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'type' => 'required|in:agent,branch,broker,outlet',
            'email' => 'required|email',
            'phone_number' => 'required|string',
        ]);

        $account = Account::create([
            'name' => $request->name,
            'location' => $request->location,
            'type' => $request->type,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
        ]);

        return redirect(route('accounts.index'));
    }
}

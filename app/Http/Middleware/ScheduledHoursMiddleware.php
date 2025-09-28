<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class ScheduledHoursMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $hour = now()->format('H');

        if ($hour >= 9 && $hour <= 17) {

            abort(403, 'Sorry we\'re closed');
        }

        return $next($request);
    }
}
